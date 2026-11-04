/**
 * Composition root for bin feature builders.
 *
 * Explicit, typed array wiring all feature builders into the pipeline.
 * Adding a new feature: create the builder, import here, add to array.
 *
 * Pattern: Composition Root (not registry). Two lines per feature.
 *
 * NOTE: Wall patterns are NOT included — handled as a special case
 * in featuresStage due to per-wall caching and cutout clipping.
 */

import type { FeatureBuilder } from './featureBuilder';
import { compartmentWallsFeature } from '../compartmentBuilder';
import { insertCutsFeature } from '../insertBuilder';
import { slotCutsFeature } from '../slotBuilder';
import { labelTabsFeature } from '../labelTabBuilder';
import { handlesFeature } from '../handleBuilder';
import {
  pullTabFeature,
  pullTabRecessFeature,
  pullTabBackRecessFeature,
  pullTabCenterFeature,
  pullTabCenterRecessFeature,
  pullTabCenterBackRecessFeature,
} from '../pullTabBuilder';
import { scoopRampsFeature } from '../scoopRampBuilder';
import { interiorFilletFeature } from '../interiorFilletBuilder';
import { floorRaiseFeature } from '../floorRaiseBuilder';
import { wallCutoutsFeature } from '../wallCutoutBuilder';
import { slideRailsFeature } from '../slideRailBuilder';
import { dividerBlendFeature } from '../dividerBlendBuilder';
import { wallTextCutFeature, wallTextEmbossFeature } from '../wallTextBuilder';
import { floorTextCutFeature, floorTextEmbossFeature } from '../floorTextBuilder';
import { wallLabelSlotBossesFeature, wallLabelSlotCutsFeature } from '../wallLabelSlotBuilder';

export const BIN_FEATURE_BUILDERS: readonly FeatureBuilder[] = [
  compartmentWallsFeature,
  floorRaiseFeature,
  insertCutsFeature,
  slotCutsFeature,
  labelTabsFeature,
  handlesFeature,
  pullTabFeature,
  pullTabRecessFeature,
  pullTabBackRecessFeature,
  pullTabCenterFeature,
  pullTabCenterRecessFeature,
  pullTabCenterBackRecessFeature,
  scoopRampsFeature,
  interiorFilletFeature,
  wallCutoutsFeature,
  slideRailsFeature,
  dividerBlendFeature,
  wallTextCutFeature,
  wallTextEmbossFeature,
  floorTextCutFeature,
  floorTextEmbossFeature,
  wallLabelSlotBossesFeature,
  wallLabelSlotCutsFeature,
] as const;

/**
 * The subset a solid body can still take. Every other builder here shapes an
 * interior a solid bin does not have. Wall text and wall cutouts work the outer
 * walls, which a solid bin has exactly like a hollow one. A wall cutout only
 * reaches about a wall's thickness, so a notch through a solid bin needs a pocket
 * cutout behind it to clear the fill.
 */
export const SOLID_FEATURE_BUILDERS: readonly FeatureBuilder[] = [
  wallCutoutsFeature,
  wallTextCutFeature,
  wallTextEmbossFeature,
  wallLabelSlotBossesFeature,
  wallLabelSlotCutsFeature,
] as const;

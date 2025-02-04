import {Dimensions} from 'react-native';

// Get the dimensions of the current device window
export const {height: deviceHeight, width: deviceWidth} =
  Dimensions.get('window');

// Define the guideline base height based on the main test device
const guidelineBaseHeight = 667; // The height of the main test device

/**
 * Scale a size proportionally based on the device's height
 * @function height
 * @param {number} size - The size to scale
 * @returns {number} - The scaled size
 */
const scaleSize = size => size * (deviceHeight / guidelineBaseHeight);

const SIZES = {
  SCALE_2: scaleSize(2),
  SCALE_4: scaleSize(4),
  SCALE_6: scaleSize(6),
  SCALE_8: scaleSize(8),
  SCALE_10: scaleSize(10),
  SCALE_12: scaleSize(12),
  SCALE_14: scaleSize(14),
  SCALE_16: scaleSize(16),
  SCALE_18: scaleSize(18),
  SCALE_20: scaleSize(20),
  SCALE_22: scaleSize(22),
  SCALE_24: scaleSize(24),
  SCALE_26: scaleSize(26),
  SCALE_28: scaleSize(28),
  SCALE_30: scaleSize(30),
  SCALE_32: scaleSize(32),
  SCALE_34: scaleSize(34),
  SCALE_36: scaleSize(36),
  SCALE_38: scaleSize(38),
  SCALE_40: scaleSize(40),
  SCALE_42: scaleSize(42),
  SCALE_44: scaleSize(44),
  SCALE_46: scaleSize(46),
  SCALE_48: scaleSize(48),
  SCALE_50: scaleSize(50),
  SCALE_52: scaleSize(52),
  SCALE_54: scaleSize(54),
  SCALE_56: scaleSize(56),
  SCALE_58: scaleSize(58),
  SCALE_60: scaleSize(60),
  SCALE_62: scaleSize(62),
  SCALE_64: scaleSize(64),
  SCALE_66: scaleSize(66),
  SCALE_68: scaleSize(68),
  SCALE_70: scaleSize(70),
  SCALE_72: scaleSize(72),
  SCALE_74: scaleSize(74),
  SCALE_76: scaleSize(76),
  SCALE_78: scaleSize(78),
  SCALE_80: scaleSize(80),
  SCALE_82: scaleSize(82),
  SCALE_84: scaleSize(84),
  SCALE_86: scaleSize(86),
  SCALE_88: scaleSize(88),
  SCALE_90: scaleSize(90),
  SCALE_92: scaleSize(92),
  SCALE_94: scaleSize(94),
  SCALE_96: scaleSize(96),
  SCALE_98: scaleSize(98),
  SCALE_100: scaleSize(100),
  SCALE_102: scaleSize(102),
  SCALE_104: scaleSize(104),
  SCALE_106: scaleSize(106),
  SCALE_108: scaleSize(108),
  SCALE_110: scaleSize(110),
  SCALE_112: scaleSize(112),
  SCALE_114: scaleSize(114),
  SCALE_116: scaleSize(116),
  SCALE_118: scaleSize(118),
  SCALE_120: scaleSize(120),
  SCALE_122: scaleSize(122),
  SCALE_124: scaleSize(124),
  SCALE_126: scaleSize(126),
  SCALE_128: scaleSize(128),
  SCALE_130: scaleSize(130),
  SCALE_132: scaleSize(132),
  SCALE_134: scaleSize(134),
  SCALE_136: scaleSize(136),
  SCALE_138: scaleSize(138),
  SCALE_140: scaleSize(140),
  SCALE_142: scaleSize(142),
  SCALE_144: scaleSize(144),
  SCALE_146: scaleSize(146),
  SCALE_148: scaleSize(148),
  SCALE_150: scaleSize(150),
  SCALE_152: scaleSize(152),
  SCALE_154: scaleSize(154),
  SCALE_156: scaleSize(156),
  SCALE_158: scaleSize(158),
  SCALE_160: scaleSize(160),
  SCALE_162: scaleSize(162),
  SCALE_164: scaleSize(164),
  SCALE_166: scaleSize(166),
  SCALE_168: scaleSize(168),
  SCALE_170: scaleSize(170),
  SCALE_172: scaleSize(172),
  SCALE_174: scaleSize(174),
  SCALE_176: scaleSize(176),
  SCALE_178: scaleSize(178),
  SCALE_180: scaleSize(180),
  SCALE_182: scaleSize(182),
  SCALE_184: scaleSize(184),
  SCALE_186: scaleSize(186),
  SCALE_188: scaleSize(188),
  SCALE_190: scaleSize(190),
  SCALE_192: scaleSize(192),
  SCALE_194: scaleSize(194),
  SCALE_196: scaleSize(196),
  SCALE_198: scaleSize(198),
  SCALE_200: scaleSize(200),
};

export default SIZES;

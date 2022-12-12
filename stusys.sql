/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : stusys

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 09/12/2022 14:58:29
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stu_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `stu_number` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `stu_major` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `stu_address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES (1, '谭宗培', '21060101116', '计算机网络技术', '广东省湛江市坡头区');
INSERT INTO `student` VALUES (2, '陈丽', '20214564', '软件技术', '广东省广州市白云区11');
INSERT INTO `student` VALUES (3, '邱宇', '20214546', '大数据', '广东省深圳市宝田区');
INSERT INTO `student` VALUES (4, '李达', '20227879', '大数据应用技术', '广东省阳江市江城区');
INSERT INTO `student` VALUES (5, '张明', '20213467', '大数据应用技术', '广东省广州市番禺区');
INSERT INTO `student` VALUES (6, '张刘飞', '20224564', '大数据应用技术', '广东省湛江市坡头区');
INSERT INTO `student` VALUES (7, '测试1', '测试1', '测试1', '测试1');
INSERT INTO `student` VALUES (8, '测试2', '测试2', '测试2', '测试2');
INSERT INTO `student` VALUES (9, '测试3', '测试3', '测试3', '测试3');
INSERT INTO `student` VALUES (10, '测试4', '测试4', '测试4', '测试4');
INSERT INTO `student` VALUES (11, '测试5', '测试5', '测试5', '测试5');
INSERT INTO `student` VALUES (12, '测试6', '测试6', '测试6', '测试6');

SET FOREIGN_KEY_CHECKS = 1;

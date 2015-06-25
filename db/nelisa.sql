-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 25, 2015 at 08:27 AM
-- Server version: 5.6.19-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `nelisa`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `cat_id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` text NOT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cat_id`, `cat_name`) VALUES
(1, 'shortLife'),
(2, 'cannedGoods'),
(3, 'cooldrinks'),
(4, 'longLife'),
(5, 'toiletries'),
(6, 'fruit'),
(7, 'sweets'),
(8, 'gifts');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `prod_id` int(11) NOT NULL AUTO_INCREMENT,
  `prod_name` text NOT NULL,
  `cat_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`prod_id`),
  KEY `cat_id` (`cat_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`prod_id`, `prod_name`, `cat_id`) VALUES
(1, 'Milk 1l', 1),
(2, 'Imasi', 1),
(3, 'Bread', 1),
(4, 'Chakalaka Can', 2),
(5, 'Gold Dish Vegetable Curry Can', 2),
(6, 'Fanta 500ml', 3),
(7, 'Coke 500ml', 3),
(8, 'Cream Soda 500ml', 3),
(9, 'Iwisa Pap 5kg', 4),
(10, 'Top Class Soy Mince', 4),
(11, 'Shampoo 1 litre', 5),
(12, 'Soap Bar', 5),
(13, 'Bananas - loose', 6),
(14, 'Apples - loose', 6),
(15, 'Mixed Sweets 5s', 8),
(16, 'Heart Chocolates', 8),
(17, 'Rose (plastic)', 7),
(18, 'Valentine Cards', 7);

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE IF NOT EXISTS `sales` (
  `sale_id` int(11) NOT NULL AUTO_INCREMENT,
  `prod_id` int(11) NOT NULL,
  `day` text NOT NULL,
  `date` date NOT NULL,
  `qtySold` int(11) NOT NULL,
  `salePrice` decimal(19,2) NOT NULL,
  PRIMARY KEY (`sale_id`),
  UNIQUE KEY `sale_id` (`sale_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=449 ;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`sale_id`, `prod_id`, `day`, `date`, `qtySold`, `salePrice`) VALUES
(1, 1, 'Sunday', '2015-02-01', 3, 10.00),
(2, 2, 'Sunday', '2015-02-01', 1, 25.00),
(3, 3, 'Sunday', '2015-02-01', 2, 12.00),
(4, 4, 'Sunday', '2015-02-01', 3, 10.00),
(5, 5, 'Sunday', '2015-02-01', 2, 9.00),
(6, 6, 'Sunday', '2015-02-01', 3, 6.50),
(7, 7, 'Sunday', '2015-02-01', 2, 6.50),
(8, 8, 'Sunday', '2015-02-01', 2, 7.50),
(9, 9, 'Sunday', '2015-02-01', 0, 30.00),
(10, 10, 'Sunday', '2015-02-01', 2, 12.00),
(11, 11, 'Sunday', '2015-02-01', 1, 30.00),
(12, 12, 'Sunday', '2015-02-01', 0, 6.00),
(13, 13, 'Sunday', '2015-02-01', 3, 2.00),
(14, 14, 'Sunday', '2015-02-01', 5, 2.00),
(15, 15, 'Sunday', '2015-02-01', 9, 3.00),
(16, 1, 'Monday', '2015-02-02', 4, 10.00),
(17, 2, 'Monday', '2015-02-02', 4, 25.00),
(18, 3, 'Monday', '2015-02-02', 5, 12.00),
(19, 4, 'Monday', '2015-02-02', 4, 10.00),
(20, 5, 'Monday', '2015-02-02', 0, 9.00),
(21, 6, 'Monday', '2015-02-02', 5, 6.50),
(22, 7, 'Monday', '2015-02-02', 8, 6.50),
(23, 8, 'Monday', '2015-02-02', 4, 7.50),
(24, 9, 'Monday', '2015-02-02', 5, 30.00),
(25, 10, 'Monday', '2015-02-02', 3, 12.00),
(26, 11, 'Monday', '2015-02-02', 0, 30.00),
(27, 12, 'Monday', '2015-02-02', 2, 6.00),
(28, 13, 'Monday', '2015-02-02', 0, 2.00),
(29, 14, 'Monday', '2015-02-02', 0, 2.00),
(30, 15, 'Monday', '2015-02-02', 0, 3.00),
(31, 1, 'Tuesday', '2015-02-03', 7, 10.00),
(32, 2, 'Tuesday', '2015-02-03', 4, 25.00),
(33, 3, 'Tuesday', '2015-02-03', 7, 12.00),
(34, 4, 'Tuesday', '2015-02-03', 4, 10.00),
(35, 5, 'Tuesday', '2015-02-03', 2, 9.00),
(36, 6, 'Tuesday', '2015-02-03', 5, 6.50),
(37, 7, 'Tuesday', '2015-02-03', 8, 6.50),
(38, 8, 'Tuesday', '2015-02-03', 3, 7.50),
(39, 9, 'Tuesday', '2015-02-03', 3, 30.00),
(40, 10, 'Tuesday', '2015-02-03', 3, 12.00),
(41, 11, 'Tuesday', '2015-02-03', 0, 30.00),
(42, 12, 'Tuesday', '2015-02-03', 2, 6.00),
(43, 13, 'Tuesday', '2015-02-03', 10, 2.00),
(44, 14, 'Tuesday', '2015-02-03', 8, 2.00),
(45, 15, 'Tuesday', '2015-02-03', 15, 2.00),
(46, 1, 'Wednesday', '2015-02-04', 5, 10.00),
(47, 2, 'Wednesday', '2015-02-04', 8, 25.00),
(48, 3, 'Wednesday', '2015-02-04', 8, 12.00),
(49, 4, 'Wednesday', '2015-02-04', 2, 10.00),
(50, 5, 'Wednesday', '2015-02-04', 0, 9.00),
(51, 6, 'Wednesday', '2015-02-04', 7, 6.50),
(52, 7, 'Wednesday', '2015-02-04', 12, 6.50),
(53, 8, 'Wednesday', '2015-02-04', 2, 7.50),
(54, 9, 'Wednesday', '2015-02-04', 1, 30.00),
(55, 10, 'Wednesday', '2015-02-04', 4, 12.00),
(56, 11, 'Wednesday', '2015-02-04', 1, 30.00),
(57, 12, 'Wednesday', '2015-02-04', 3, 6.00),
(58, 13, 'Wednesday', '2015-02-04', 16, 2.00),
(59, 14, 'Wednesday', '2015-02-04', 8, 2.00),
(60, 15, 'Wednesday', '2015-02-04', 12, 2.00),
(61, 1, 'Thursday', '2015-02-05', 10, 10.00),
(62, 2, 'Thursday', '2015-02-05', 3, 25.00),
(63, 3, 'Thursday', '2015-02-05', 12, 12.00),
(64, 4, 'Thursday', '2015-02-05', 3, 10.00),
(65, 5, 'Thursday', '2015-02-05', 6, 9.00),
(66, 6, 'Thursday', '2015-02-05', 3, 6.50),
(67, 7, 'Thursday', '2015-02-05', 9, 6.50),
(68, 8, 'Thursday', '2015-02-05', 8, 7.50),
(69, 9, 'Thursday', '2015-02-05', 2, 30.00),
(70, 10, 'Thursday', '2015-02-05', 1, 12.00),
(71, 11, 'Thursday', '2015-02-05', 0, 30.00),
(72, 12, 'Thursday', '2015-02-05', 1, 6.00),
(73, 13, 'Thursday', '2015-02-05', 8, 2.00),
(74, 14, 'Thursday', '2015-02-05', 12, 2.00),
(75, 15, 'Thursday', '2015-02-05', 5, 3.00),
(76, 1, 'Friday', '2015-02-06', 6, 10.00),
(77, 2, 'Friday', '2015-02-06', 4, 25.00),
(78, 3, 'Friday', '2015-02-06', 7, 12.00),
(79, 4, 'Friday', '2015-02-06', 5, 10.00),
(80, 5, 'Friday', '2015-02-06', 2, 9.00),
(81, 6, 'Friday', '2015-02-06', 7, 6.50),
(82, 7, 'Friday', '2015-02-06', 8, 6.50),
(83, 8, 'Friday', '2015-02-06', 3, 7.50),
(84, 9, 'Friday', '2015-02-06', 6, 30.00),
(85, 10, 'Friday', '2015-02-06', 8, 12.00),
(86, 11, 'Friday', '2015-02-06', 1, 30.00),
(87, 12, 'Friday', '2015-02-06', 3, 6.00),
(88, 13, 'Friday', '2015-02-06', 2, 2.00),
(89, 14, 'Friday', '2015-02-06', 0, 2.00),
(90, 15, 'Friday', '2015-02-06', 5, 3.00),
(91, 1, 'Saturday', '2015-02-07', 4, 10.00),
(92, 2, 'Saturday', '2015-02-07', 6, 25.00),
(93, 3, 'Saturday', '2015-02-07', 4, 12.00),
(94, 4, 'Saturday', '2015-02-07', 2, 10.00),
(95, 5, 'Saturday', '2015-02-07', 0, 9.00),
(96, 6, 'Saturday', '2015-02-07', 3, 6.50),
(97, 7, 'Saturday', '2015-02-07', 7, 6.50),
(98, 8, 'Saturday', '2015-02-07', 0, 7.50),
(99, 9, 'Saturday', '2015-02-07', 0, 30.00),
(100, 10, 'Saturday', '2015-02-07', 1, 12.00),
(101, 11, 'Saturday', '2015-02-07', 0, 30.00),
(102, 12, 'Saturday', '2015-02-07', 1, 6.00),
(103, 13, 'Saturday', '2015-02-07', 8, 2.00),
(104, 14, 'Saturday', '2015-02-07', 3, 2.00),
(105, 15, 'Saturday', '2015-02-07', 3, 3.00),
(106, 1, 'Sunday', '2015-02-08', 0, 10.00),
(107, 2, 'Sunday', '2015-02-08', 2, 25.00),
(108, 3, 'Sunday', '2015-02-08', 2, 12.00),
(109, 4, 'Sunday', '2015-02-08', 1, 10.00),
(110, 5, 'Sunday', '2015-02-08', 0, 9.00),
(111, 6, 'Sunday', '2015-02-08', 4, 6.50),
(112, 7, 'Sunday', '2015-02-08', 4, 6.50),
(113, 8, 'Sunday', '2015-02-08', 1, 7.50),
(114, 9, 'Sunday', '2015-02-08', 1, 30.00),
(115, 10, 'Sunday', '2015-02-08', 2, 12.00),
(116, 11, 'Sunday', '2015-02-08', 0, 30.00),
(117, 12, 'Sunday', '2015-02-08', 1, 6.00),
(118, 13, 'Sunday', '2015-02-08', 5, 2.00),
(119, 14, 'Sunday', '2015-02-08', 2, 2.00),
(120, 15, 'Sunday', '2015-02-08', 9, 3.00),
(121, 1, 'Monday', '2015-02-09', 3, 10.00),
(122, 2, 'Monday', '2015-02-09', 6, 25.00),
(123, 3, 'Monday', '2015-02-09', 7, 12.00),
(124, 4, 'Monday', '2015-02-09', 5, 10.00),
(125, 5, 'Monday', '2015-02-09', 6, 9.00),
(126, 6, 'Monday', '2015-02-09', 3, 6.50),
(127, 7, 'Monday', '2015-02-09', 8, 6.50),
(128, 8, 'Monday', '2015-02-09', 5, 7.50),
(129, 9, 'Monday', '2015-02-09', 2, 30.00),
(130, 10, 'Monday', '2015-02-09', 1, 12.00),
(131, 11, 'Monday', '2015-02-09', 0, 30.00),
(132, 12, 'Monday', '2015-02-09', 0, 6.00),
(133, 13, 'Monday', '2015-02-09', 5, 2.00),
(134, 14, 'Monday', '2015-02-09', 0, 2.00),
(135, 15, 'Monday', '2015-02-09', 3, 3.00),
(136, 1, 'Tuesday', '2015-02-10', 5, 10.00),
(137, 2, 'Tuesday', '2015-02-10', 4, 25.00),
(138, 3, 'Tuesday', '2015-02-10', 2, 12.00),
(139, 4, 'Tuesday', '2015-02-10', 0, 10.00),
(140, 5, 'Tuesday', '2015-02-10', 0, 9.00),
(141, 6, 'Tuesday', '2015-02-10', 1, 6.50),
(142, 7, 'Tuesday', '2015-02-10', 3, 6.50),
(143, 8, 'Tuesday', '2015-02-10', 2, 7.50),
(144, 9, 'Tuesday', '2015-02-10', 1, 30.00),
(145, 10, 'Tuesday', '2015-02-10', 3, 12.00),
(146, 11, 'Tuesday', '2015-02-10', 1, 30.00),
(147, 12, 'Tuesday', '2015-02-10', 0, 6.00),
(148, 13, 'Tuesday', '2015-02-10', 3, 2.00),
(149, 14, 'Tuesday', '2015-02-10', 2, 2.00),
(150, 15, 'Tuesday', '2015-02-10', 7, 2.00),
(151, 16, 'Tuesday', '2015-02-10', 3, 35.00),
(152, 17, 'Tuesday', '2015-02-10', 1, 15.00),
(153, 1, 'Wednesday', '2015-02-11', 5, 10.00),
(154, 2, 'Wednesday', '2015-02-11', 4, 25.00),
(155, 3, 'Wednesday', '2015-02-11', 3, 12.00),
(156, 4, 'Wednesday', '2015-02-11', 2, 10.00),
(157, 5, 'Wednesday', '2015-02-11', 1, 9.00),
(158, 6, 'Wednesday', '2015-02-11', 2, 6.50),
(159, 7, 'Wednesday', '2015-02-11', 3, 6.50),
(160, 8, 'Wednesday', '2015-02-11', 1, 7.50),
(161, 9, 'Wednesday', '2015-02-11', 0, 30.00),
(162, 10, 'Wednesday', '2015-02-11', 2, 12.00),
(163, 11, 'Wednesday', '2015-02-11', 1, 30.00),
(164, 12, 'Wednesday', '2015-02-11', 0, 6.00),
(165, 13, 'Wednesday', '2015-02-11', 4, 2.00),
(166, 14, 'Wednesday', '2015-02-11', 3, 2.00),
(167, 15, 'Wednesday', '2015-02-11', 8, 2.00),
(168, 16, 'Wednesday', '2015-02-11', 5, 35.00),
(169, 17, 'Wednesday', '2015-02-11', 3, 15.00),
(170, 1, 'Thursday', '2015-02-12', 3, 10.00),
(171, 2, 'Thursday', '2015-02-12', 9, 25.00),
(172, 3, 'Thursday', '2015-02-12', 2, 12.00),
(173, 4, 'Thursday', '2015-02-12', 3, 10.00),
(174, 5, 'Thursday', '2015-02-12', 1, 9.00),
(175, 6, 'Thursday', '2015-02-12', 0, 6.50),
(176, 7, 'Thursday', '2015-02-12', 2, 6.50),
(177, 8, 'Thursday', '2015-02-12', 1, 7.50),
(178, 9, 'Thursday', '2015-02-12', 0, 30.00),
(179, 10, 'Thursday', '2015-02-12', 2, 12.00),
(180, 11, 'Thursday', '2015-02-12', 0, 30.00),
(181, 12, 'Thursday', '2015-02-12', 2, 6.00),
(182, 13, 'Thursday', '2015-02-12', 2, 2.00),
(183, 14, 'Thursday', '2015-02-12', 3, 2.00),
(184, 15, 'Thursday', '2015-02-12', 3, 3.00),
(185, 16, 'Thursday', '2015-02-12', 2, 35.00),
(186, 18, 'Thursday', '2015-02-12', 6, 4.00),
(187, 17, 'Thursday', '2015-02-12', 2, 15.00),
(188, 1, 'Friday', '2015-02-13', 6, 10.00),
(189, 2, 'Friday', '2015-02-13', 6, 25.00),
(190, 3, 'Friday', '2015-02-13', 5, 12.00),
(191, 4, 'Friday', '2015-02-13', 7, 10.00),
(192, 5, 'Friday', '2015-02-13', 15, 9.00),
(193, 6, 'Friday', '2015-02-13', 6, 6.50),
(194, 7, 'Friday', '2015-02-13', 8, 6.50),
(195, 8, 'Friday', '2015-02-13', 4, 7.50),
(196, 9, 'Friday', '2015-02-13', 3, 30.00),
(197, 10, 'Friday', '2015-02-13', 4, 12.00),
(198, 11, 'Friday', '2015-02-13', 4, 30.00),
(199, 12, 'Friday', '2015-02-13', 2, 6.00),
(200, 13, 'Friday', '2015-02-13', 4, 2.00),
(201, 14, 'Friday', '2015-02-13', 2, 2.00),
(202, 15, 'Friday', '2015-02-13', 6, 3.00),
(203, 16, 'Friday', '2015-02-13', 10, 35.00),
(204, 18, 'Friday', '2015-02-13', 5, 4.00),
(205, 17, 'Friday', '2015-02-13', 7, 15.00),
(206, 1, 'Saturday', '2015-02-14', 6, 10.00),
(207, 2, 'Saturday', '2015-02-14', 5, 25.00),
(208, 3, 'Saturday', '2015-02-14', 7, 12.00),
(209, 4, 'Saturday', '2015-02-14', 3, 10.00),
(210, 5, 'Saturday', '2015-02-14', 4, 9.00),
(211, 6, 'Saturday', '2015-02-14', 7, 6.50),
(212, 7, 'Saturday', '2015-02-14', 14, 6.50),
(213, 8, 'Saturday', '2015-02-14', 8, 7.50),
(214, 9, 'Saturday', '2015-02-14', 3, 30.00),
(215, 10, 'Saturday', '2015-02-14', 7, 12.00),
(216, 11, 'Saturday', '2015-02-14', 0, 30.00),
(217, 12, 'Saturday', '2015-02-14', 0, 6.00),
(218, 13, 'Saturday', '2015-02-14', 5, 2.00),
(219, 14, 'Saturday', '2015-02-14', 9, 2.00),
(220, 15, 'Saturday', '2015-02-14', 18, 3.00),
(221, 16, 'Saturday', '2015-02-14', 0, 35.00),
(222, 18, 'Saturday', '2015-02-14', 3, 4.00),
(223, 17, 'Saturday', '2015-02-14', 1, 15.00),
(224, 1, 'Sunday', '2015-02-15', 2, 10.00),
(225, 2, 'Sunday', '2015-02-15', 2, 25.00),
(226, 3, 'Sunday', '2015-02-15', 1, 12.00),
(227, 4, 'Sunday', '2015-02-15', 3, 10.00),
(228, 5, 'Sunday', '2015-02-15', 0, 9.00),
(229, 6, 'Sunday', '2015-02-15', 5, 6.50),
(230, 7, 'Sunday', '2015-02-15', 4, 6.50),
(231, 8, 'Sunday', '2015-02-15', 2, 7.50),
(232, 9, 'Sunday', '2015-02-15', 0, 30.00),
(233, 10, 'Sunday', '2015-02-15', 1, 12.00),
(234, 11, 'Sunday', '2015-02-15', 0, 30.00),
(235, 12, 'Sunday', '2015-02-15', 1, 6.00),
(236, 13, 'Sunday', '2015-02-15', 1, 2.00),
(237, 14, 'Sunday', '2015-02-15', 1, 2.00),
(238, 15, 'Sunday', '2015-02-15', 3, 3.00),
(239, 1, 'Monday', '2015-02-16', 7, 10.00),
(240, 2, 'Monday', '2015-02-16', 6, 25.00),
(241, 3, 'Monday', '2015-02-16', 4, 12.00),
(242, 4, 'Monday', '2015-02-16', 3, 10.00),
(243, 5, 'Monday', '2015-02-16', 2, 9.00),
(244, 6, 'Monday', '2015-02-16', 2, 6.50),
(245, 7, 'Monday', '2015-02-16', 1, 6.50),
(246, 8, 'Monday', '2015-02-16', 2, 7.50),
(247, 9, 'Monday', '2015-02-16', 2, 30.00),
(248, 10, 'Monday', '2015-02-16', 1, 12.00),
(249, 11, 'Monday', '2015-02-16', 0, 30.00),
(250, 12, 'Monday', '2015-02-16', 2, 6.00),
(251, 13, 'Monday', '2015-02-16', 2, 2.00),
(252, 14, 'Monday', '2015-02-16', 3, 2.00),
(253, 15, 'Monday', '2015-02-16', 5, 3.00),
(254, 1, 'Tuesday', '2015-02-17', 8, 10.00),
(255, 2, 'Tuesday', '2015-02-17', 6, 25.00),
(256, 3, 'Tuesday', '2015-02-17', 3, 12.00),
(257, 4, 'Tuesday', '2015-02-17', 0, 10.00),
(258, 5, 'Tuesday', '2015-02-17', 0, 9.00),
(259, 6, 'Tuesday', '2015-02-17', 0, 6.50),
(260, 7, 'Tuesday', '2015-02-17', 2, 6.50),
(261, 8, 'Tuesday', '2015-02-17', 0, 7.50),
(262, 9, 'Tuesday', '2015-02-17', 1, 30.00),
(263, 10, 'Tuesday', '2015-02-17', 2, 12.00),
(264, 11, 'Tuesday', '2015-02-17', 0, 30.00),
(265, 12, 'Tuesday', '2015-02-17', 1, 6.00),
(266, 13, 'Tuesday', '2015-02-17', 2, 2.00),
(267, 14, 'Tuesday', '2015-02-17', 6, 2.00),
(268, 15, 'Tuesday', '2015-02-17', 5, 2.00),
(269, 1, 'Wednesday', '2015-02-18', 3, 10.00),
(270, 2, 'Wednesday', '2015-02-18', 5, 25.00),
(271, 3, 'Wednesday', '2015-02-18', 5, 12.00),
(272, 4, 'Wednesday', '2015-02-18', 1, 10.00),
(273, 5, 'Wednesday', '2015-02-18', 0, 9.00),
(274, 6, 'Wednesday', '2015-02-18', 0, 6.50),
(275, 7, 'Wednesday', '2015-02-18', 3, 6.50),
(276, 8, 'Wednesday', '2015-02-18', 2, 7.50),
(277, 9, 'Wednesday', '2015-02-18', 1, 30.00),
(278, 10, 'Wednesday', '2015-02-18', 1, 12.00),
(279, 11, 'Wednesday', '2015-02-18', 1, 30.00),
(280, 12, 'Wednesday', '2015-02-18', 1, 6.00),
(281, 13, 'Wednesday', '2015-02-18', 1, 2.00),
(282, 14, 'Wednesday', '2015-02-18', 3, 2.00),
(283, 15, 'Wednesday', '2015-02-18', 2, 2.00),
(284, 1, 'Thursday', '2015-02-19', 5, 10.00),
(285, 2, 'Thursday', '2015-02-19', 3, 25.00),
(286, 3, 'Thursday', '2015-02-19', 5, 12.00),
(287, 4, 'Thursday', '2015-02-19', 2, 10.00),
(288, 5, 'Thursday', '2015-02-19', 1, 9.00),
(289, 6, 'Thursday', '2015-02-19', 1, 6.50),
(290, 7, 'Thursday', '2015-02-19', 1, 6.50),
(291, 8, 'Thursday', '2015-02-19', 0, 7.50),
(292, 9, 'Thursday', '2015-02-19', 0, 30.00),
(293, 10, 'Thursday', '2015-02-19', 2, 12.00),
(294, 11, 'Thursday', '2015-02-19', 2, 30.00),
(295, 12, 'Thursday', '2015-02-19', 0, 6.00),
(296, 13, 'Thursday', '2015-02-19', 3, 2.00),
(297, 14, 'Thursday', '2015-02-19', 5, 2.00),
(298, 15, 'Thursday', '2015-02-19', 4, 3.00),
(299, 1, 'Friday', '2015-02-20', 4, 10.00),
(300, 2, 'Friday', '2015-02-20', 2, 25.00),
(301, 3, 'Friday', '2015-02-20', 3, 12.00),
(302, 4, 'Friday', '2015-02-20', 5, 10.00),
(303, 5, 'Friday', '2015-02-20', 3, 9.00),
(304, 6, 'Friday', '2015-02-20', 3, 6.50),
(305, 7, 'Friday', '2015-02-20', 5, 6.50),
(306, 8, 'Friday', '2015-02-20', 6, 7.50),
(307, 9, 'Friday', '2015-02-20', 0, 30.00),
(308, 10, 'Friday', '2015-02-20', 3, 12.00),
(309, 11, 'Friday', '2015-02-20', 1, 30.00),
(310, 12, 'Friday', '2015-02-20', 3, 6.00),
(311, 13, 'Friday', '2015-02-20', 6, 2.00),
(312, 14, 'Friday', '2015-02-20', 4, 2.00),
(313, 15, 'Friday', '2015-02-20', 8, 3.00),
(314, 1, 'Saturday', '2015-02-21', 1, 10.00),
(315, 2, 'Saturday', '2015-02-21', 1, 25.00),
(316, 3, 'Saturday', '2015-02-21', 3, 12.00),
(317, 4, 'Saturday', '2015-02-21', 3, 10.00),
(318, 5, 'Saturday', '2015-02-21', 2, 9.00),
(319, 6, 'Saturday', '2015-02-21', 3, 6.50),
(320, 7, 'Saturday', '2015-02-21', 2, 6.50),
(321, 8, 'Saturday', '2015-02-21', 0, 7.50),
(322, 9, 'Saturday', '2015-02-21', 0, 30.00),
(323, 10, 'Saturday', '2015-02-21', 2, 12.00),
(324, 11, 'Saturday', '2015-02-21', 0, 30.00),
(325, 12, 'Saturday', '2015-02-21', 0, 6.00),
(326, 13, 'Saturday', '2015-02-21', 2, 2.00),
(327, 14, 'Saturday', '2015-02-21', 3, 2.00),
(328, 15, 'Saturday', '2015-02-21', 2, 3.00),
(329, 1, 'Sunday', '2015-02-22', 2, 10.00),
(330, 2, 'Sunday', '2015-02-22', 2, 25.00),
(331, 3, 'Sunday', '2015-02-22', 3, 12.00),
(332, 4, 'Sunday', '2015-02-22', 0, 10.00),
(333, 5, 'Sunday', '2015-02-22', 1, 9.00),
(334, 6, 'Sunday', '2015-02-22', 2, 6.50),
(335, 7, 'Sunday', '2015-02-22', 0, 6.50),
(336, 8, 'Sunday', '2015-02-22', 0, 7.50),
(337, 9, 'Sunday', '2015-02-22', 0, 30.00),
(338, 10, 'Sunday', '2015-02-22', 0, 12.00),
(339, 11, 'Sunday', '2015-02-22', 0, 30.00),
(340, 12, 'Sunday', '2015-02-22', 1, 6.00),
(341, 13, 'Sunday', '2015-02-22', 0, 2.00),
(342, 14, 'Sunday', '2015-02-22', 1, 2.00),
(343, 15, 'Sunday', '2015-02-22', 3, 3.00),
(344, 1, 'Monday', '2015-02-23', 8, 10.00),
(345, 2, 'Monday', '2015-02-23', 6, 25.00),
(346, 3, 'Monday', '2015-02-23', 2, 12.00),
(347, 4, 'Monday', '2015-02-23', 2, 10.00),
(348, 5, 'Monday', '2015-02-23', 1, 9.00),
(349, 6, 'Monday', '2015-02-23', 1, 6.50),
(350, 7, 'Monday', '2015-02-23', 3, 6.50),
(351, 8, 'Monday', '2015-02-23', 0, 7.50),
(352, 9, 'Monday', '2015-02-23', 2, 30.00),
(353, 10, 'Monday', '2015-02-23', 1, 12.00),
(354, 11, 'Monday', '2015-02-23', 0, 30.00),
(355, 12, 'Monday', '2015-02-23', 0, 6.00),
(356, 13, 'Monday', '2015-02-23', 2, 2.00),
(357, 14, 'Monday', '2015-02-23', 1, 2.00),
(358, 15, 'Monday', '2015-02-23', 3, 3.00),
(359, 1, 'Tuesday', '2015-02-24', 4, 10.00),
(360, 2, 'Tuesday', '2015-02-24', 2, 25.00),
(361, 3, 'Tuesday', '2015-02-24', 6, 12.00),
(362, 4, 'Tuesday', '2015-02-24', 1, 10.00),
(363, 5, 'Tuesday', '2015-02-24', 2, 9.00),
(364, 6, 'Tuesday', '2015-02-24', 1, 6.50),
(365, 7, 'Tuesday', '2015-02-24', 2, 6.50),
(366, 8, 'Tuesday', '2015-02-24', 1, 7.50),
(367, 9, 'Tuesday', '2015-02-24', 1, 30.00),
(368, 10, 'Tuesday', '2015-02-24', 2, 12.00),
(369, 11, 'Tuesday', '2015-02-24', 0, 30.00),
(370, 12, 'Tuesday', '2015-02-24', 1, 6.00),
(371, 13, 'Tuesday', '2015-02-24', 5, 2.00),
(372, 14, 'Tuesday', '2015-02-24', 3, 2.00),
(373, 15, 'Tuesday', '2015-02-24', 7, 2.00),
(374, 1, 'Wednesday', '2015-02-25', 8, 10.00),
(375, 2, 'Wednesday', '2015-02-25', 6, 25.00),
(376, 3, 'Wednesday', '2015-02-25', 7, 12.00),
(377, 4, 'Wednesday', '2015-02-25', 5, 10.00),
(378, 5, 'Wednesday', '2015-02-25', 4, 9.00),
(379, 6, 'Wednesday', '2015-02-25', 6, 6.50),
(380, 7, 'Wednesday', '2015-02-25', 8, 6.50),
(381, 8, 'Wednesday', '2015-02-25', 5, 7.50),
(382, 9, 'Wednesday', '2015-02-25', 3, 30.00),
(383, 10, 'Wednesday', '2015-02-25', 7, 12.00),
(384, 11, 'Wednesday', '2015-02-25', 1, 30.00),
(385, 12, 'Wednesday', '2015-02-25', 4, 6.00),
(386, 13, 'Wednesday', '2015-02-25', 2, 2.00),
(387, 14, 'Wednesday', '2015-02-25', 8, 2.00),
(388, 15, 'Wednesday', '2015-02-25', 5, 2.00),
(389, 1, 'Thursday', '2015-02-26', 8, 10.00),
(390, 2, 'Thursday', '2015-02-26', 8, 25.00),
(391, 3, 'Thursday', '2015-02-26', 5, 12.00),
(392, 4, 'Thursday', '2015-02-26', 3, 10.00),
(393, 5, 'Thursday', '2015-02-26', 7, 9.00),
(394, 6, 'Thursday', '2015-02-26', 3, 6.50),
(395, 7, 'Thursday', '2015-02-26', 7, 6.50),
(396, 8, 'Thursday', '2015-02-26', 4, 7.50),
(397, 9, 'Thursday', '2015-02-26', 3, 30.00),
(398, 10, 'Thursday', '2015-02-26', 8, 12.00),
(399, 11, 'Thursday', '2015-02-26', 0, 30.00),
(400, 12, 'Thursday', '2015-02-26', 3, 6.00),
(401, 13, 'Thursday', '2015-02-26', 2, 2.00),
(402, 14, 'Thursday', '2015-02-26', 3, 2.00),
(403, 15, 'Thursday', '2015-02-26', 1, 3.00),
(404, 1, 'Friday', '2015-02-27', 8, 10.00),
(405, 2, 'Friday', '2015-02-27', 5, 25.00),
(406, 3, 'Friday', '2015-02-27', 3, 12.00),
(407, 4, 'Friday', '2015-02-27', 12, 10.00),
(408, 5, 'Friday', '2015-02-27', 9, 9.00),
(409, 6, 'Friday', '2015-02-27', 6, 6.50),
(410, 7, 'Friday', '2015-02-27', 18, 6.50),
(411, 8, 'Friday', '2015-02-27', 3, 7.50),
(412, 9, 'Friday', '2015-02-27', 4, 30.00),
(413, 10, 'Friday', '2015-02-27', 12, 12.00),
(414, 11, 'Friday', '2015-02-27', 5, 30.00),
(415, 12, 'Friday', '2015-02-27', 3, 6.00),
(416, 13, 'Friday', '2015-02-27', 1, 2.00),
(417, 14, 'Friday', '2015-02-27', 3, 2.00),
(418, 15, 'Friday', '2015-02-27', 1, 3.00),
(419, 1, 'Saturday', '2015-02-28', 3, 10.00),
(420, 2, 'Saturday', '2015-02-28', 2, 25.00),
(421, 3, 'Saturday', '2015-02-28', 4, 12.00),
(422, 4, 'Saturday', '2015-02-28', 5, 10.00),
(423, 5, 'Saturday', '2015-02-28', 6, 9.00),
(424, 6, 'Saturday', '2015-02-28', 3, 6.50),
(425, 7, 'Saturday', '2015-02-28', 4, 6.50),
(426, 8, 'Saturday', '2015-02-28', 6, 7.50),
(427, 9, 'Saturday', '2015-02-28', 2, 30.00),
(428, 10, 'Saturday', '2015-02-28', 9, 12.00),
(429, 11, 'Saturday', '2015-02-28', 4, 30.00),
(430, 12, 'Saturday', '2015-02-28', 7, 6.00),
(431, 13, 'Saturday', '2015-02-28', 6, 2.00),
(432, 14, 'Saturday', '2015-02-28', 8, 2.00),
(433, 15, 'Saturday', '2015-02-28', 8, 3.00),
(434, 1, 'Sunday', '2015-03-01', 4, 10.00),
(435, 2, 'Sunday', '2015-03-01', 3, 25.00),
(436, 3, 'Sunday', '2015-03-01', 3, 12.00),
(437, 4, 'Sunday', '2015-03-01', 5, 10.00),
(438, 5, 'Sunday', '2015-03-01', 4, 9.00),
(439, 6, 'Sunday', '2015-03-01', 2, 6.50),
(440, 7, 'Sunday', '2015-03-01', 3, 6.50),
(441, 8, 'Sunday', '2015-03-01', 0, 7.50),
(442, 9, 'Sunday', '2015-03-01', 1, 30.00),
(443, 10, 'Sunday', '2015-03-01', 4, 12.00),
(444, 11, 'Sunday', '2015-03-01', 3, 30.00),
(445, 12, 'Sunday', '2015-03-01', 6, 6.00),
(446, 13, 'Sunday', '2015-03-01', 4, 2.00),
(447, 14, 'Sunday', '2015-03-01', 5, 2.00),
(448, 15, 'Sunday', '2015-03-01', 12, 3.00);

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE IF NOT EXISTS `stock` (
  `purchase_id` int(11) NOT NULL AUTO_INCREMENT,
  `prod_id` int(11) NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `quantity` varchar(4) NOT NULL,
  `cost` decimal(19,2) NOT NULL,
  `totalCost` decimal(19,2) NOT NULL,
  PRIMARY KEY (`purchase_id`),
  UNIQUE KEY `purchase_id` (`purchase_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=154 ;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`purchase_id`, `prod_id`, `supplier_id`, `date`, `quantity`, `cost`, `totalCost`) VALUES
(1, 4, 1, '2015-01-23', '3', 7.00, 21.00),
(2, 7, 1, '2015-01-23', '3', 3.50, 10.50),
(3, 8, 1, '2015-01-23', '4', 4.50, 18.00),
(4, 6, 1, '2015-01-23', '2', 4.50, 9.00),
(5, 5, 1, '2015-01-23', '2', 5.00, 10.00),
(6, 2, 1, '2015-01-23', '1', 17.00, 17.00),
(7, 9, 1, '2015-01-23', '3', 20.00, 60.00),
(8, 1, 1, '2015-01-23', '4', 7.00, 28.00),
(9, 10, 1, '2015-01-23', '5', 8.00, 40.00),
(10, 13, 2, '2015-01-28', '4', 1.00, 4.00),
(11, 14, 2, '2015-01-28', '10', 1.50, 15.00),
(12, 15, 2, '2015-01-28', '60', 3.00, 180.00),
(13, 11, 3, '2015-01-28', '1', 20.00, 20.00),
(14, 12, 3, '2015-01-28', '3', 3.00, 9.00),
(15, 3, 1, '2015-01-28', '30', 9.00, 270.00),
(16, 4, 1, '2015-01-28', '15', 7.00, 105.00),
(17, 7, 1, '2015-01-28', '36', 3.50, 126.00),
(18, 8, 1, '2015-01-28', '24', 4.50, 108.00),
(19, 6, 1, '2015-01-28', '24', 4.50, 108.00),
(20, 5, 1, '2015-01-28', '15', 5.00, 75.00),
(21, 2, 1, '2015-01-28', '15', 17.00, 255.00),
(22, 9, 1, '2015-01-28', '15', 20.00, 300.00),
(23, 1, 1, '2015-01-28', '25', 7.00, 175.00),
(24, 10, 1, '2015-01-28', '10', 8.00, 80.00),
(25, 11, 3, '2015-02-02', '1', 20.00, 20.00),
(26, 12, 3, '2015-02-02', '3', 3.00, 9.00),
(27, 13, 2, '2015-02-03', '12', 1.00, 12.00),
(28, 14, 2, '2015-02-03', '100', 1.50, 150.00),
(29, 15, 2, '2015-02-03', '240', 3.00, 720.00),
(30, 11, 3, '2015-02-04', '2', 20.00, 40.00),
(31, 12, 3, '2015-02-04', '5', 3.00, 15.00),
(32, 3, 4, '2015-02-04', '4', 11.00, 44.00),
(33, 2, 4, '2015-02-04', '4', 24.00, 96.00),
(34, 13, 2, '2015-02-06', '8', 1.00, 8.00),
(35, 14, 2, '2015-02-06', '100', 1.50, 150.00),
(36, 15, 2, '2015-02-06', '150', 3.00, 450.00),
(37, 12, 3, '2015-02-06', '5', 3.00, 15.00),
(38, 3, 1, '2015-02-06', '30', 9.00, 270.00),
(39, 4, 1, '2015-02-06', '15', 7.00, 105.00),
(40, 7, 1, '2015-02-06', '36', 3.50, 126.00),
(41, 8, 1, '2015-02-06', '18', 4.50, 81.00),
(42, 6, 1, '2015-02-06', '24', 4.50, 108.00),
(43, 5, 1, '2015-02-06', '15', 5.00, 75.00),
(44, 2, 1, '2015-02-06', '25', 17.00, 425.00),
(45, 9, 1, '2015-02-06', '5', 20.00, 100.00),
(46, 1, 1, '2015-02-06', '10', 7.00, 70.00),
(47, 10, 1, '2015-02-06', '10', 8.00, 80.00),
(48, 17, 5, '2015-02-09', '20', 10.00, 200.00),
(49, 1, 4, '2015-02-09', '3', 9.50, 28.50),
(50, 13, 2, '2015-02-10', '4', 1.00, 4.00),
(51, 14, 2, '2015-02-10', '20', 1.50, 30.00),
(52, 15, 2, '2015-02-10', '150', 3.00, 450.00),
(53, 3, 1, '2015-02-10', '10', 9.00, 90.00),
(54, 4, 1, '2015-02-10', '15', 7.00, 105.00),
(55, 7, 1, '2015-02-10', '18', 3.50, 63.00),
(56, 5, 1, '2015-02-10', '5', 5.00, 25.00),
(57, 16, 1, '2015-02-10', '20', 25.00, 500.00),
(58, 2, 1, '2015-02-10', '10', 17.00, 170.00),
(59, 9, 1, '2015-02-10', '5', 20.00, 100.00),
(60, 1, 1, '2015-02-10', '10', 7.00, 70.00),
(61, 10, 1, '2015-02-10', '15', 8.00, 120.00),
(62, 11, 3, '2015-02-11', '2', 20.00, 40.00),
(63, 18, 3, '2015-02-11', '20', 2.00, 40.00),
(64, 1, 4, '2015-02-12', '3', 9.50, 28.50),
(65, 13, 2, '2015-02-13', '4', 1.00, 4.00),
(66, 15, 2, '2015-02-13', '50', 3.00, 150.00),
(67, 11, 3, '2015-02-13', '3', 20.00, 60.00),
(68, 12, 3, '2015-02-13', '5', 3.00, 15.00),
(69, 5, 4, '2015-02-13', '5', 8.50, 42.50),
(70, 3, 1, '2015-02-13', '5', 9.00, 45.00),
(71, 7, 1, '2015-02-13', '12', 3.50, 42.00),
(72, 6, 1, '2015-02-13', '12', 4.50, 54.00),
(73, 2, 1, '2015-02-13', '20', 17.00, 340.00),
(74, 1, 1, '2015-02-13', '15', 7.00, 105.00),
(75, 10, 1, '2015-02-13', '5', 8.00, 40.00),
(76, 11, 3, '2015-02-14', '1', 20.00, 20.00),
(77, 5, 4, '2015-02-14', '2', 8.50, 17.00),
(78, 4, 4, '2015-02-16', '2', 8.50, 17.00),
(79, 8, 4, '2015-02-16', '2', 7.50, 15.00),
(80, 6, 4, '2015-02-16', '1', 6.50, 6.50),
(81, 5, 4, '2015-02-16', '2', 8.50, 17.00),
(82, 9, 4, '2015-02-16', '1', 30.00, 30.00),
(83, 1, 4, '2015-02-16', '6', 9.50, 57.00),
(84, 14, 2, '2015-02-17', '60', 1.50, 90.00),
(85, 15, 2, '2015-02-17', '12', 3.00, 36.00),
(86, 3, 1, '2015-02-17', '15', 9.00, 135.00),
(87, 4, 1, '2015-02-17', '10', 7.00, 70.00),
(88, 7, 1, '2015-02-17', '24', 3.50, 84.00),
(89, 8, 1, '2015-02-17', '12', 4.50, 54.00),
(90, 6, 1, '2015-02-17', '12', 4.50, 54.00),
(91, 5, 1, '2015-02-17', '10', 5.00, 50.00),
(92, 2, 1, '2015-02-17', '15', 17.00, 255.00),
(93, 9, 1, '2015-02-17', '5', 20.00, 100.00),
(94, 1, 1, '2015-02-17', '15', 7.00, 105.00),
(95, 10, 1, '2015-02-17', '5', 8.00, 40.00),
(96, 11, 3, '2015-02-18', '1', 20.00, 20.00),
(97, 12, 3, '2015-02-18', '5', 3.00, 15.00),
(98, 11, 3, '2015-02-19', '2', 20.00, 40.00),
(99, 1, 4, '2015-02-19', '1', 9.50, 9.50),
(100, 13, 2, '2015-02-20', '20', 1.00, 20.00),
(101, 14, 2, '2015-02-20', '90', 1.50, 135.00),
(102, 15, 2, '2015-02-20', '20', 3.00, 60.00),
(103, 11, 3, '2015-02-20', '2', 20.00, 40.00),
(104, 12, 3, '2015-02-20', '3', 3.00, 9.00),
(105, 3, 1, '2015-02-20', '10', 9.00, 90.00),
(106, 2, 1, '2015-02-20', '10', 17.00, 170.00),
(107, 9, 1, '2015-02-20', '5', 20.00, 100.00),
(108, 1, 1, '2015-02-20', '15', 7.00, 105.00),
(109, 10, 1, '2015-02-20', '10', 8.00, 80.00),
(110, 4, 4, '2015-02-23', '3', 9.00, 27.00),
(111, 13, 2, '2015-02-24', '10', 1.00, 10.00),
(112, 14, 2, '2015-02-24', '90', 1.50, 135.00),
(113, 15, 2, '2015-02-24', '8', 3.00, 24.00),
(114, 3, 1, '2015-02-24', '15', 9.00, 135.00),
(115, 4, 1, '2015-02-24', '10', 7.00, 70.00),
(116, 7, 1, '2015-02-24', '18', 3.50, 63.00),
(117, 8, 1, '2015-02-24', '6', 4.50, 27.00),
(118, 6, 1, '2015-02-24', '6', 4.50, 27.00),
(119, 5, 1, '2015-02-24', '10', 5.00, 50.00),
(120, 2, 1, '2015-02-24', '15', 17.00, 255.00),
(121, 1, 1, '2015-02-24', '20', 7.00, 140.00),
(122, 10, 1, '2015-02-24', '15', 8.00, 120.00),
(123, 12, 3, '2015-02-25', '5', 3.00, 15.00),
(124, 11, 3, '2015-02-26', '2', 20.00, 40.00),
(125, 12, 3, '2015-02-26', '5', 3.00, 15.00),
(126, 3, 4, '2015-02-26', '1', 11.00, 11.00),
(127, 6, 4, '2015-02-26', '2', 6.50, 13.00),
(128, 5, 4, '2015-02-26', '1', 8.50, 8.50),
(129, 9, 4, '2015-02-26', '1', 30.00, 30.00),
(130, 13, 2, '2015-02-27', '10', 1.00, 10.00),
(131, 14, 2, '2015-02-27', '60', 1.50, 90.00),
(132, 11, 3, '2015-02-27', '5', 20.00, 100.00),
(133, 12, 3, '2015-02-27', '5', 3.00, 15.00),
(134, 3, 1, '2015-02-27', '20', 9.00, 180.00),
(135, 4, 1, '2015-02-27', '15', 7.00, 105.00),
(136, 7, 1, '2015-02-27', '24', 3.50, 84.00),
(137, 8, 1, '2015-02-27', '12', 4.50, 54.00),
(138, 6, 1, '2015-02-27', '12', 4.50, 54.00),
(139, 5, 1, '2015-02-27', '15', 5.00, 75.00),
(140, 2, 1, '2015-02-27', '15', 17.00, 255.00),
(141, 9, 1, '2015-02-27', '10', 20.00, 200.00),
(142, 1, 1, '2015-02-27', '20', 7.00, 140.00),
(143, 10, 1, '2015-02-27', '15', 8.00, 120.00),
(144, 11, 3, '2015-02-28', '2', 20.00, 40.00),
(145, 12, 3, '2015-02-28', '3', 3.00, 9.00),
(146, 4, 4, '2015-02-28', '3', 8.50, 25.50),
(147, 5, 4, '2015-02-28', '2', 8.50, 17.00),
(148, 10, 4, '2015-02-28', '5', 11.00, 55.00),
(149, 11, 3, '2015-03-01', '2', 20.00, 40.00),
(150, 12, 3, '2015-03-01', '5', 3.00, 15.00),
(151, 4, 4, '2015-03-01', '3', 8.50, 25.50),
(152, 5, 4, '2015-03-01', '2', 8.50, 17.00),
(153, 10, 4, '2015-03-01', '3', 11.00, 33.00);

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

CREATE TABLE IF NOT EXISTS `supplier` (
  `supplier_id` int(11) NOT NULL AUTO_INCREMENT,
  `supplier_name` text NOT NULL,
  PRIMARY KEY (`supplier_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `supplier`
--

INSERT INTO `supplier` (`supplier_id`, `supplier_name`) VALUES
(1, 'Makro'),
(2, 'Epping Market'),
(3, 'HomeMade'),
(4, 'Joe Spaza Shop'),
(5, 'ChinaTown');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `username` varchar(20) NOT NULL,
  `password` varchar(60) NOT NULL,
  `role` varchar(10) NOT NULL,
  `locked` tinyint(1) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `role`, `locked`) VALUES
('andre', '$2a$10$SG.wC9yE9ArwpP081k4rX.9yZ11ihZl4WlSWvJc5ZWirr238Wg35y', 'readOnly', 0),
('boss', '$2a$10$cSEZ/8vzJ2r8ulXvpL5ij.44mTWgIsTYTrokq0zDZygV6DFwkpnXy', 'admin', 0),
('nelisa', '$2a$10$DTCfnDFQX7y.4KqeZ9X2GOFe/4hFK9Qsy06Hppa85BtS8A7YGcQFu', 'admin', 0),
('xolani', '$2a$10$JKOp9dwgh/Zh0fd0VlJ9x./1Mxinj3Go8jZL9dcvWSt4eDFkWIw4e', 'readOnly', 0);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `category` (`cat_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

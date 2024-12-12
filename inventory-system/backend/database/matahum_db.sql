-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2024 at 12:56 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `matahum_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`) VALUES
(1, 'Ordinary Rice', 'Rice suitable for everyday meals, affordable and commonly consumed by those on a budget.\r\n\r\n'),
(2, 'Fancy Rice', 'Premium rice, often chosen by those who prefer better quality, with a higher price point.'),
(3, 'Special Rice', 'High-quality rice typically associated with special occasions, favored by the affluent.');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(255) NOT NULL,
  `category` varchar(100) NOT NULL,
  `stocks` int(11) NOT NULL,
  `buying_price` decimal(10,0) NOT NULL,
  `selling_price` decimal(10,0) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `image` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category`, `stocks`, `buying_price`, `selling_price`, `date`, `image`, `product_name`) VALUES
(18, 'Ordinary Rice', 1000, 40, 50, '2024-12-13 07:39:40', 'uploads/1734046780485-[Cherry Tree] [Ordinary Rice] [5 Kilo Sack].png', 'Cherry Tree'),
(19, 'Ordinary Rice', 1000, 38, 42, '2024-12-13 07:40:52', 'uploads/1734046852600-[Green Mango] [Ordinary Rice] [25 Kilos].png', 'Green Mango'),
(20, 'Ordinary Rice', 1000, 48, 44, '2024-12-13 07:41:59', 'uploads/1734046919475-[Aromatic Broken Rice] [Ordinary Rice] [25 Kilos].png', 'Aromatic Broken Rice'),
(21, 'Ordinary Rice', 1000, 57, 51, '2024-12-13 07:42:52', 'uploads/1734046972360-Golden Rice, Fancy Rice.png', 'Golden Rice'),
(22, 'Fancy Rice', 1000, 59, 55, '2024-12-13 07:43:35', 'uploads/1734047015962-[Panda Rice] [Fancy Rice] [5 Kilo Sack].png', 'Panda Rice'),
(23, 'Fancy Rice', 1000, 60, 55, '2024-12-13 07:44:29', 'uploads/1734047069692-[Jasmine Fragrant] [Fancy Rice] [5 Kilo Sack].png', 'Jasmine Fragrant');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `role` enum('Admin','Editor','Viewer') NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  `lastLogin` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `role`, `status`, `lastLogin`) VALUES
(4, 'Angelo Padilla', 'Gelotzy', 'Admin', 'Active', '2024-12-12 23:45:06'),
(5, 'Ronald Esralon', 'Asset', 'Editor', 'Active', '2024-12-12 23:47:37'),
(6, 'Nolly Alvarado', 'HAHAHAHA', 'Admin', 'Active', '2024-12-12 23:47:54'),
(7, 'Edan Raymundo', 'Aydan', 'Viewer', 'Inactive', '2024-12-12 23:46:21'),
(8, 'Jestro De Castro', 'Jizztro', 'Admin', 'Inactive', '2024-12-12 23:47:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

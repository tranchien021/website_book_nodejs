-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 18, 2022 lúc 05:59 PM
-- Phiên bản máy phục vụ: 10.4.19-MariaDB
-- Phiên bản PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `website_book`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `banner`
--

INSERT INTO `banner` (`id`, `name`, `slug`, `image`) VALUES
(1, 'combo sach', 'combo-sach', 'banner-beethoven.jpg'),
(2, 'combo ', 'combo', 'banner-sach-moi.jpg'),
(3, 'aa', 'aaaa', 'neu-toi-biet-duoc-khi-20-full-banner.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `book`
--

CREATE TABLE `book` (
  `id` int(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `author` varchar(255) NOT NULL,
  `price` int(11) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `material` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `book`
--

INSERT INTO `book` (`id`, `image`, `slug`, `name`, `category_id`, `author`, `price`, `cost`, `discount`, `material`, `status`) VALUES
(14, 'lap-ke-hoach-kinh-doanh-hieu-qua.jpg', 'lap-ke-hoach-kinh-doanh-hieu-qua', 'Lập kế hoạch kinh doanh hiệu quả', 1, 'Brian Finch', 120001, 139000, 20, 'book', 1),
(15, 'ma-bun-luu-manh-mt.jpg', 'ma-bun-luu-manh', 'Ma Bùn Lưu Manh Và Những Câu Chuyện Khác Của Nguyễn Trí', 4, 'Nguyễn Trí', 68000, 85000, 20, 'book', 1),
(17, 'combo-chuyen-nghe-chuyen-doi.jpg', 'combo-sach-hot', 'COMBO SÁCH HOT - GIẢM ĐẾN 25%', NULL, 'Nguyễn Hữu Long', 111200, 139000, 20, 'combo', 1),
(20, 'bank-4.0.jpg', 'bank-4.0-giao-dich-moi-noi-khong-chi-la-ngan-hang', 'Bank 4.0 - Giao dịch mọi nơi, không chỉ là ngân hàng', 1, 'Brett King', 111200, 139000, 20, 'book', 1),
(21, 'bo-sach-500-cau-chuyen-dao-duc.jpg', 'bo-sach-500-cau-chuyen-dao-duc-nhung-cau-chuyen-tinh-than-8-cuon', 'Bộ Sách 500 Câu Chuyện Đạo Đức - Những Câu Chuyện Tình Thân (Bộ 8 Cuốn)', 4, 'Nguyễn Hạnh - Trần Thị Thanh Nguyên', 111222, 139000, 20, 'book', 1),
(22, 'ung-thu-hoang-de-cua-bach-benh.jpg', 'ung-thu-hoang-de-cua-bach-benh', 'Lịch Sử Ung Thư - Hoàng Đế Của Bách Bệnh', 1, 'Siddhartha Mukherjee', 111202, 139000, 20, 'book', 1),
(23, 'troi-dem-huyen-dieu.jpg', 'cuon-sach-kham-pha-troi-dem-huyen-dieu', 'Cuốn Sách Khám Phá: Trời Đêm Huyền Diệu', 8, 'Disney Learning', 150000, 300000, 20, 'book', 1),
(24, 'bo-sach-nhung-cau-chuyen-cho-con-thanh-nguoi-tu-te.jpg', 'bo-sach-nhung-cau-chuyen-cho-con-thanh-nguoi-tu-te', 'Bộ Sách Những Câu Chuyện Cho Con Thành Người Tử Tế (Bộ 5 Cuốn)', 8, 'Nhiều Tác Giả', 200000, 300000, 20, 'book', 1),
(25, 'lich-su-the-gioi.jpg', 'lich-su-the-gioi', 'Lịch Sử Thế Giới', 9, 'Nam Phong tùng thư - Phạm Quỳnh chủ nhiệm', 250000, 500000, 20, 'book', 1),
(26, 'ngoai-giao-cua-chinh-quyen-sai-gon.jpg', 'ngoai-giao-cua-chinh-quyen-sai-gon', 'Ngoại Giao Của Chính Quyền Sài Gòn', 3, 'Brian Finch', 48, 30000, 20, 'book', 3),
(27, 'tung-buoc-chan-no-hoa.jpg', 'tung-buoc-chan-no-hoa', 'Từng bước chân nở hoa: Khi câu kinh bước tới', 5, 'Minh Chiến', 48, 300000, 20, 'book', 4),
(28, 'cam-on-vi-da-duoc-thuong.jpg', 'cam-on-vi-da-duoc-thuong', 'Cảm ơn vì đã được thương', 5, 'Minh Chiến', 480000, 500000, 20, 'book', 4),
(29, 'vua-gia-long.jpg', 'vua-gia-long', 'Hào quang của vua Gia Long trong mắt Michel Gaultier', 9, 'Minh Chiến', 500000, 600000, 20, 'book', 4),
(30, 'suoi-nguon-va-cai-toi-trong-tung-ca-the.jpg', 'suoi-nguon-va-cai-toi-trong-tung-ca-the', '\"Suối nguồn” và cái tôi hiện sinh trong từng cá thể', 1, 'Minh Chiến', 50, 300000, 20, 'book', 4),
(31, 'dai-dich-tren-con-duong-to-lua.jpg', 'dai-dich-tren-con-duong-to-lua', 'Đại dịch trên những con đường tơ lụa', 11, 'Minh Chiến', 50, 500000, 20, 'book', 4),
(32, 'combo-me-con-su-tu-bo-tat-ngan-tay-ngan-mat.jpg', 'combo-me-con-su-tu-bo-tat-ngan-tay-ngan-mat', 'Combo Mẹ Con Sư Tử - Bồ Tát Ngàn Tay Ngàn Mắt', 10, 'Thích Nhất Hạnh', 111200, 139000, 20, 'combo', 1),
(33, 'combo-hanh-phuc-sang-tao.jpg', 'combo-hanh-phuc-sang-tao', 'Combo Osho: Hạnh Phúc Tại Tâm, Can Đảm Biến Thách Thức Thành Sức Mạnh & Sáng Tạo Bừng Cháy Sức Mạnh Bên Trong', 11, 'Gosho Aoyama, Mutsuki Watanabe, Takahisa Taira', 120000, 300000, 20, 'combo', 1),
(34, 'combo-giao-duc-va-y-nghia-cuoc-song.jpg', 'combo-giao-duc-va-y-nghia-cuoc-song', 'Combo Giáo Dục Và Ý Nghĩa Cuộc Sống Và Bạn Đang Nghịch Gì Với Đời Mình?', 10, ' J.Krishnamurti', 150000, 300000, 20, 'combo', 1),
(35, 'combo-dinh-duong-than-duoc-xanh.jpg', 'combo-dinh-duong-than-duoc-xanh', 'Combo Dinh Dưỡng Xanh - Thần dược xanh', 13, 'Ryu Seung-SunVictoria Boutenko', 48, 30000, 20, 'combo', 1),
(36, 'combo-an-xanh-song-lanh.jpg', 'combo-an-xanh-song-lanh', 'Combo Ăn Xanh Để Khỏe - Sống Lành Để Trẻ', 13, 'Norman W. Walker', 48000, 60000, 20, 'combo', 1),
(37, 'combo-luoc-su-loai-nguoi.jpg', 'combo-luoc-su-loai-nguoi', 'Combo Lược Sử Loài Người - Lược Sử Tương Lai - 21 Bài Học ChoThế Kỷ 21', 9, 'Yuval Noah Harari', 111200, 139000, 20, 'combo', 1),
(38, 'combo-phong-cach-song.jpg', 'combo-phong-cach-song', 'Bộ Sách Phong Cách Sống (Bộ 5 Cuốn)', 2, 'Marie Tourell Soderberg, Joanna Nylund, Yukari Mitsuhashi, Margareta Magnusson, Linnea Dunne', 111200, 139000, 20, 'combo', 1),
(39, 'duong-may-tren-dat-hoa.jpg', 'duong-may-tren-dat-hoa', 'Đường Mây Trên Đất Hoa', 10, 'Minh Chiến', 111200, 139000, 20, 'book', 3),
(40, 'muon-kiep-nhan-sinh.jpg', 'muon-kiep-nhan-sinh', 'Muôn Kiếp Nhân Sinh', 10, 'Trần Minh Chiến ', 111200, 139000, 20, 'book', 3),
(41, 'duong-may-trong-coi-mong.jpg', 'duong-may-trong-coi-mong', 'Đường Mây Trong Cõi Mộng', 10, 'Trần Chiến', 111200, 139000, 20, 'book', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `parent` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `name`, `slug`, `description`, `parent`, `status`) VALUES
(1, 'Sách Văn Học Việt Nam', 'sach-van-hoc-viet-nam', 'Sách Văn Học Việt Nam', 0, 1),
(2, 'Sách Kinh Tế - Kỹ Năng ', 'sach-kinh-te-ky-nang', NULL, 0, 1),
(3, 'Kinh tế - Chính Trị', 'kinh-te-chinh-tri', NULL, 1, 1),
(4, 'Nhân Vật - Bài Học Kinh Doanh', 'nhan-vat-bai-hoc-kinh-doanh', NULL, 1, 1),
(5, 'Nghệ Thuật Sống - Tâm lý ', 'nghe-thuat-song-tam-ly', NULL, 0, 1),
(6, 'Sách Văn Học Nước Ngoài', 'sach-van-hoc-nuoc-ngoai', 'Sách Văn Học Nước Ngoài', 0, 1),
(7, 'Sách Thiếu Nhi', 'sach-thieu-nhi', 'Sách Thiếu Nhi', 0, 1),
(8, 'Sách Giáo Dục - Gia Đình', 'sach-giao-duc-gia-dinh', 'Sách Giáo Dục - Gia Đình', 0, 1),
(9, 'Sách Lịch Sử', 'sach-lich-su', 'Sách Lịch Sử', 0, 1),
(10, 'Sách Văn Hóa - Nghệ Thuật', 'sach-van-hoa-nghe-thuat', 'Sách Văn Hóa - Nghệ Thuật', 0, 1),
(11, 'Sách Khoa Học - Triết Học', 'sach-khoa-hoc-triet-hoc', 'Sách Khoa Học - Triết Học', 0, 1),
(12, 'Sách Tâm Linh - Tôn Giáo', 'sach-tam-linh-ton-giao', 'Sách Tâm Linh - Tôn Giáo', 0, 1),
(13, 'Sách Y Học - Thực Dưỡng', 'sach-y-hoc-thuc-duong', 'Sách Y Học - Thực Dưỡng', 0, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `customer`
--

INSERT INTO `customer` (`id`, `name`, `phone`, `email`, `password`, `level`) VALUES
(1, 'Chien', '0349521656', 'tranchien021@gmail.com', '123456789', 1),
(18, 'Trần Minh Chiến ', '0349521656', 'tranchien2105@gmail.com', '123456', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `shipping_id` int(11) NOT NULL,
  `order_status` int(11) NOT NULL,
  `order_code` varchar(255) NOT NULL,
  `created_date` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`order_id`, `customer_id`, `shipping_id`, `order_status`, `order_code`, `created_date`) VALUES
(12, 1, 45, 1, '4WcXeJ2slh', '2022-01-18 22:22:15');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_detail`
--

CREATE TABLE `order_detail` (
  `order_detail_id` int(11) NOT NULL,
  `order_code` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `order_detail`
--

INSERT INTO `order_detail` (`order_detail_id`, `order_code`, `product_id`, `product_name`, `product_price`) VALUES
(67, '4WcXeJ2slh', 20, 'Bank 4.0 - Giao dịch mọi nơi, không chỉ là ngân hàng', '111200'),
(68, '4WcXeJ2slh', 21, 'Bộ Sách 500 Câu Chuyện Đạo Đức - Những Câu Chuyện Tình Thân (Bộ 8 Cuốn)', '111222');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shipping`
--

CREATE TABLE `shipping` (
  `shipping_id` int(11) NOT NULL,
  `shipping_name` varchar(255) NOT NULL,
  `shipping_phone` varchar(11) NOT NULL,
  `shipping_email` varchar(255) NOT NULL,
  `shipping_address` varchar(255) NOT NULL,
  `shipping_method` varchar(255) NOT NULL,
  `shipping_packet` varchar(255) NOT NULL,
  `shipping_notes` varchar(255) NOT NULL,
  `shipping_province` varchar(255) NOT NULL,
  `shipping_district` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `shipping`
--

INSERT INTO `shipping` (`shipping_id`, `shipping_name`, `shipping_phone`, `shipping_email`, `shipping_address`, `shipping_method`, `shipping_packet`, `shipping_notes`, `shipping_province`, `shipping_district`) VALUES
(45, 'Phạm Thi Thu Hằng ', '0349521656', 'tranchien021@gmail.com', 'Dak Song Dak Song', 'ATM', 'hanhnhanh', 'can than ', 'dak song', 'Quan Thu Duc');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Chỉ mục cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`order_detail_id`);

--
-- Chỉ mục cho bảng `shipping`
--
ALTER TABLE `shipping`
  ADD PRIMARY KEY (`shipping_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `book`
--
ALTER TABLE `book`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `order_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT cho bảng `shipping`
--
ALTER TABLE `shipping`
  MODIFY `shipping_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

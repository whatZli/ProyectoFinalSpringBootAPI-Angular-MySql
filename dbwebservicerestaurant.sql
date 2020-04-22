-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-04-2020 a las 09:52:19
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbwebservicerestaurant`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) DEFAULT NULL,
  `Telefono` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`ID`, `Nombre`, `Apellidos`, `Telefono`) VALUES
(1, 'Alex', 'Domínguez', '123123123'),
(4, 'Cliente 3', 'Apellidos cliente 3', '654321654'),
(5, 'cliente4', 'cliente4', '654654654'),
(6, 'cliente 5', 'cliente 5', '987654321'),
(9, 'cliente 6', 'cliente 6', '654321654'),
(10, 'cliente 7', 'calks', '654654321'),
(11, 'cliente 8', 'cliente 8', '654987654');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info`
--

CREATE TABLE `info` (
  `id` int(11) NOT NULL,
  `dato` varchar(100) NOT NULL,
  `valor` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `info`
--

INSERT INTO `info` (`id`, `dato`, `valor`) VALUES
(1, 'Nombre', 'Central'),
(2, 'Descripcion_corta', 'Restaurant / Coffee / Pub'),
(5, 'Descripcion_larga', 'Lorem ipsum dolor sit amet, consectetur adisit amet, consectetur adi'),
(6, 'Numero', '45'),
(7, 'Calle', 'Magallanes'),
(8, 'Provincia', 'Zamora'),
(9, 'Pais', 'España'),
(10, 'Cod_postal', '49600'),
(11, 'Apertura_laborables', 'De 13:30 a 16 y de 20:30 a 23:00 horas'),
(12, 'Apertura_festivos', 'De 12:30 a 16 y de 19:30 a 23:00 horas'),
(13, 'Telefono', '980646464'),
(14, 'Email', 'email@gmail.com'),
(15, 'Telefono', '980646464'),
(16, 'Email', 'email@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Descripcion` varchar(1000) DEFAULT NULL,
  `Imagen` varchar(255) DEFAULT NULL,
  `Categoria` enum('Comida','Bebida','Otros') DEFAULT NULL,
  `Precio` float NOT NULL DEFAULT 0,
  `Stock` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`ID`, `Nombre`, `Descripcion`, `Imagen`, `Categoria`, `Precio`, `Stock`) VALUES
(12, 'Nidos de chocolate para los huevos de Pascua', 'Ingredientes para Nidos de chocolate para los huevos de Pascua\n125 g de cereales\n1 cucharadita de es', 'https://www.recetasderechupete.com/wp-content/uploads/2020/04/Nidos-de-chocolate-para-huevos-de-Pascua-525x360.jpg', 'Comida', 5, 35),
(14, 'Sandwich de bistec con cebollas caramelizadas', 'ELABORACIÓN\nRetire la carne de la nevera y deje que quede a temperatura ambiente.  Luego cúbrala con papel de horno y golpéela con la base de un molde para ablandar hasta que los trozos queden del mismo grosor. Mientras tanto, pele las cebollas, y retire la primera capa, a continuación, cortar en rodajas de 2 cm de grosor. Ponga la mantequilla, un chorrito de aceite y el azúcar en una sartén grande antiadherente a fuego medio. ', 'http://www.jamieoliverenespañol.com/wp-content/uploads/2015/01/sandwich-carneycebollas.png', 'Comida', 5.6, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `ID` int(11) NOT NULL,
  `Fecha` date DEFAULT NULL,
  `Hora` time DEFAULT NULL,
  `Personas` int(11) DEFAULT NULL,
  `ID_Cliente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`ID`, `Fecha`, `Hora`, `Personas`, `ID_Cliente`) VALUES
(2, '2020-04-21', '00:19:16', 2, 1),
(3, '2020-04-21', '00:19:16', 2, 1),
(5, '2022-05-18', '19:22:23', 6, 1),
(7, '2024-05-18', '19:22:23', 6, 1),
(8, '2020-04-21', '13:30:00', 3, 1),
(9, '2020-04-22', '12:07:16', 3, 4),
(14, '2020-04-21', '12:43:00', 4, 4),
(15, '2020-04-22', '12:35:00', 4, 10),
(17, '2020-04-22', '13:56:00', 3, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajador`
--

CREATE TABLE `trabajador` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(40) NOT NULL,
  `Apellidos` varchar(120) NOT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `Imagen` varchar(150) DEFAULT NULL,
  `Direccion` varchar(150) DEFAULT NULL,
  `Contacto` varchar(150) DEFAULT NULL,
  `Estado` enum('Alta','Baja') NOT NULL,
  `Rango` enum('Jefe','Empleado') NOT NULL,
  `Categoria` enum('Cocina','Salón','Barra') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `trabajador`
--

INSERT INTO `trabajador` (`ID`, `Nombre`, `Apellidos`, `Descripcion`, `Imagen`, `Direccion`, `Contacto`, `Estado`, `Rango`, `Categoria`) VALUES
(21, 'Frank', 'P Arnold', 'Birthday: 2/9/1992 Birthday: 2/9/1992 Birthday: 2/9/1992 Birthday: 2/9/1992 Birthday: 2/9/1992', 'https://www.fakepersongenerator.com/Face/male/male1085300379883.jpg', 'Street: 2630 Duff Avenue  City, State, Zip: South Burlington, Vermont(VT), 05403', '802-355-0474', 'Alta', 'Jefe', 'Salón'),
(22, 'Joshua ', 'K Steele', 'Birthday: 6/15/1987 (32 years old)', 'https://www.fakepersongenerator.com/Face/male/male1085754682922.jpg', 'Street: 3678 Wilkinson Street  City, State, Zip: Nashville, Tennessee(TN), 37211', '615-429-1575', 'Baja', 'Empleado', 'Barra'),
(23, 'William ', 'M Stewart', 'Birthday: 2/12/1973 (47 years old)', 'https://www.fakepersongenerator.com/Face/male/male1085654900329.jpg', 'Street: 2708 Newton Street  City, State, Zip: Terrace, Minnesota(MN), 56383', '763-200-9489', 'Alta', 'Empleado', 'Barra'),
(24, 'Jeffrey ', 'V Babb', 'Birthday: 5/21/1950 (69 years old)', 'https://www.fakepersongenerator.com/Face/male/male1084677845977.jpg', 'Street: 1309 Red Maple Drive', '909-576-2702', 'Baja', 'Empleado', 'Cocina');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_Cliente` (`ID_Cliente`);

--
-- Indices de la tabla `trabajador`
--
ALTER TABLE `trabajador`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `info`
--
ALTER TABLE `info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `reserva`
--
ALTER TABLE `reserva`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `trabajador`
--
ALTER TABLE `trabajador`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `reserva_ibfk_1` FOREIGN KEY (`ID_Cliente`) REFERENCES `cliente` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-04-2020 a las 20:18:51
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
DROP DATABASE IF EXISTS `dbwebservicerestaurant`;
CREATE DATABASE IF NOT EXISTS `dbwebservicerestaurant` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `dbwebservicerestaurant`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE IF NOT EXISTS `cliente` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) DEFAULT NULL,
  `Telefono` varchar(15) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`ID`, `Nombre`, `Apellidos`, `Telefono`) VALUES
(19, 'Alex', 'Dominguez', '987654321');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE IF NOT EXISTS `factura` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Fecha` date DEFAULT NULL,
  `Hora` time DEFAULT NULL,
  `IVA` int(11) DEFAULT 21,
  `id_reserva` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `factura_fk` (`id_reserva`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`ID`, `Fecha`, `Hora`, `IVA`, `id_reserva`) VALUES
(25, '2020-04-30', '20:10:05', 21, 72);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura_lineas`
--

CREATE TABLE IF NOT EXISTS `factura_lineas` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ID_Factura` int(11) NOT NULL,
  `ID_Producto` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `ID_Factura` (`ID_Factura`),
  KEY `ID_Producto` (`ID_Producto`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `factura_lineas`
--

INSERT INTO `factura_lineas` (`ID`, `ID_Factura`, `ID_Producto`, `Cantidad`) VALUES
(52, 25, 16, 4),
(53, 25, 15, 5),
(54, 25, 18, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info`
--

CREATE TABLE IF NOT EXISTS `info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dato` varchar(100) NOT NULL,
  `valor` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

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
(17, 'Movil', '987654321');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE IF NOT EXISTS `producto` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Descripcion` varchar(1000) DEFAULT NULL,
  `Imagen` varchar(255) DEFAULT NULL,
  `Categoria` enum('Comida','Bebida','Otros') DEFAULT NULL,
  `Precio` float NOT NULL DEFAULT 0,
  `Stock` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`ID`, `Nombre`, `Descripcion`, `Imagen`, `Categoria`, `Precio`, `Stock`) VALUES
(12, 'Nidos de chocolate para los huevos de Pascua', 'Ingredientes para Nidos de chocolate para los huevos de Pascua\n125 g de cereales\n1 cucharadita de es', 'https://www.recetasderechupete.com/wp-content/uploads/2020/04/Nidos-de-chocolate-para-huevos-de-Pascua-525x360.jpg', 'Comida', 3.15, 35),
(15, 'Conejo guisado al ajillo', 'El conejo es una carne blanca con poca grasa, adecuada para dietas bajas en calorías. Destaca por su aporte de potasio, fósforo y calcio y además es económica ya que un conejo para 6 personas (de 1,5 Kg) nos saldrá por 7-8 euros.', 'https://www.recetasderechupete.com/wp-content/uploads/2017/02/Conejo-guisado-al-ajillo.jpg', 'Comida', 4.5, 100),
(16, 'Canelones rellenos de pollo', 'Una receta de pasta perfecta para los niños y los que no lo somos tanto, están buenísimos. Puedes dejarlos hechos con anterioridad y listos para terminar en el horno. Además son muy completos y equilibrados si acompañáis con una ensalada, de tomate por ejemplo, como ha sido mi caso.', 'https://www.recetasderechupete.com/wp-content/uploads/2020/04/Canelones-rellenos-de-pollo-525x360.jpg', 'Comida', 3.5, 100),
(17, 'Ratatouille francés clásico', 'Es un plato similar al pisto, aunque la diferencia es el método de preparación, ya que en el “Ratatouille” se preparan por separado, y más tarde se cocinan todas juntas, a fuego lento, hasta conseguir un guiso realmente apetitoso.', 'https://www.recetasderechupete.com/wp-content/uploads/2020/04/Ratatouille-525x360.jpg', 'Comida', 3, 50),
(18, 'Cóctel Daiquiri', 'El daiquiri es uno de los cócteles más interesantes que conocemos y muchos de nosotros ni lo sabíamos, por eso estoy aquí, para contarte un poco más sobre su historia y que a partir de ahora lo disfrutes como siempre, pero sabiendo un poquito más.', 'https://www.recetasderechupete.com/wp-content/uploads/2020/02/Daiquiri-c%C3%B3ctel.jpg', 'Bebida', 5, 50),
(19, 'Mojito cubano', 'Este cóctel tan famoso a nivel mundial hace patria de Cuba, el país que lo vio nacer.\n\nEl mojito es uno de las bebidas más populares en la coctelería y desde su invención han surgido numerosas versiones que varían del original.', 'https://www.recetasderechupete.com/wp-content/uploads/2020/02/Mojito-bar-525x360.jpg', 'Bebida', 2.5, 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE IF NOT EXISTS `reserva` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Fecha` date DEFAULT NULL,
  `Hora` time DEFAULT NULL,
  `Personas` int(11) DEFAULT NULL,
  `Confirmacion` tinyint(1) DEFAULT 0,
  `Cancelada` tinyint(1) DEFAULT 0,
  `Activa` tinyint(1) DEFAULT 0,
  `Mesa` int(11) DEFAULT 0,
  `Finalizada` tinyint(1) DEFAULT 0,
  `ID_Cliente` int(11) DEFAULT NULL,
  `ID_Trabajador` int(11) DEFAULT 1,
  PRIMARY KEY (`ID`),
  KEY `ID_Cliente` (`ID_Cliente`),
  KEY `ID_Trabajador` (`ID_Trabajador`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`ID`, `Fecha`, `Hora`, `Personas`, `Confirmacion`, `Cancelada`, `Activa`, `Mesa`, `Finalizada`, `ID_Cliente`, `ID_Trabajador`) VALUES
(72, '2020-04-30', '13:45:00', 5, 1, 0, 1, 35, 1, 19, 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajador`
--

CREATE TABLE IF NOT EXISTS `trabajador` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(40) NOT NULL,
  `Apellidos` varchar(120) NOT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `Imagen` varchar(150) DEFAULT NULL,
  `Direccion` varchar(150) DEFAULT NULL,
  `Contacto` varchar(150) DEFAULT NULL,
  `Estado` enum('Alta','Baja') NOT NULL,
  `Rango` enum('Jefe','Empleado') NOT NULL,
  `Categoria` enum('Cocina','Salón','Barra') NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `trabajador`
--

INSERT INTO `trabajador` (`ID`, `Nombre`, `Apellidos`, `Descripcion`, `Imagen`, `Direccion`, `Contacto`, `Estado`, `Rango`, `Categoria`) VALUES
(1, 'Trabajador', 'Por defecto', NULL, 'https://s5.postimg.cc/537jajaxj/default.png', NULL, NULL, 'Alta', 'Jefe', 'Cocina'),
(21, 'Frank', 'P Arnold', 'Birthday: 2/9/1992 Birthday: 2/9/1992 Birthday: 2/9/1992 Birthday: 2/9/1992 Birthday: 2/9/1992', 'https://www.fakepersongenerator.com/Face/male/male1085300379883.jpg', 'Street: 2630 Duff Avenue  City, State, Zip: South Burlington, Vermont(VT), 05403', '802-355-0474', 'Alta', 'Jefe', 'Salón'),
(22, 'Joshua ', 'K Steele', 'Birthday: 6/15/1987 (32 years old)', 'https://www.fakepersongenerator.com/Face/male/male1085754682922.jpg', 'Street: 3678 Wilkinson Street  City, State, Zip: Nashville, Tennessee(TN), 37211', '615-429-1575', 'Baja', 'Empleado', 'Barra'),
(23, 'William ', 'M Stewart', 'Birthday: 2/12/1973 (47 years old)', 'https://www.fakepersongenerator.com/Face/male/male1085654900329.jpg', 'Street: 2708 Newton Street  City, State, Zip: Terrace, Minnesota(MN), 56383', '763-200-9489', 'Baja', 'Empleado', 'Barra'),
(24, 'Jeffrey ', 'V Babb', 'Birthday: 5/21/1950 (69 years old)', 'https://www.fakepersongenerator.com/Face/male/male1084677845977.jpg', 'Street: 1309 Red Maple Drive', '909-576-2702', 'Baja', 'Empleado', 'Cocina');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `factura_fk` FOREIGN KEY (`id_reserva`) REFERENCES `reserva` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `factura_lineas`
--
ALTER TABLE `factura_lineas`
  ADD CONSTRAINT `ID_Factura` FOREIGN KEY (`ID_Factura`) REFERENCES `factura` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ID_Producto` FOREIGN KEY (`ID_Producto`) REFERENCES `producto` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `reserva_fk` FOREIGN KEY (`ID_Trabajador`) REFERENCES `trabajador` (`ID`),
  ADD CONSTRAINT `reserva_ibfk_1` FOREIGN KEY (`ID_Cliente`) REFERENCES `cliente` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

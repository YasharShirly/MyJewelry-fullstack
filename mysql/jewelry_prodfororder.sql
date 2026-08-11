-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: jewelry
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `prodfororder`
--

DROP TABLE IF EXISTS `prodfororder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prodfororder` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orderid` int DEFAULT NULL,
  `prodid` int DEFAULT NULL,
  `qty` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `a_idx` (`prodid`),
  KEY `b_idx` (`orderid`),
  CONSTRAINT `a` FOREIGN KEY (`prodid`) REFERENCES `products` (`idproducts`),
  CONSTRAINT `b` FOREIGN KEY (`orderid`) REFERENCES `orders` (`idorders`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prodfororder`
--

LOCK TABLES `prodfororder` WRITE;
/*!40000 ALTER TABLE `prodfororder` DISABLE KEYS */;
INSERT INTO `prodfororder` VALUES (1,2,1,NULL),(2,2,2,NULL),(3,2,3,NULL),(4,25,2,1),(5,25,3,1),(6,26,2,1),(7,27,3,1),(8,28,3,1),(9,29,3,1),(10,29,1,1),(11,30,2,1),(12,30,24,1),(13,31,2,1),(14,31,3,1),(15,32,1,2),(16,32,3,1),(17,32,2,1),(18,33,26,1),(19,33,33,2),(20,34,1,1),(21,34,2,1),(22,35,3,2),(23,35,28,1),(24,36,2,1),(25,37,10,1),(26,37,13,1),(27,38,10,1),(28,38,13,1),(29,39,2,1),(30,39,10,1),(31,39,1,1),(32,40,14,1),(33,40,13,1),(34,41,14,1),(35,41,13,1),(36,42,2,1),(37,42,1,1),(38,43,1,1),(39,43,2,1),(40,43,10,1),(41,44,1,2),(42,45,2,1),(43,45,10,1),(44,46,2,1),(45,47,2,1),(46,48,2,1),(47,49,2,1),(48,50,2,1),(49,51,2,1),(50,52,1,1),(51,52,2,1);
/*!40000 ALTER TABLE `prodfororder` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-27 13:26:34

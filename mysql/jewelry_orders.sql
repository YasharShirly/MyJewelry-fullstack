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
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `idorders` int NOT NULL AUTO_INCREMENT,
  `iduser` int DEFAULT NULL,
  `dateOrder` varchar(45) DEFAULT NULL,
  `dateArrive` varchar(45) DEFAULT NULL,
  `isOut` tinyint DEFAULT NULL,
  `address` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`idorders`),
  KEY `iduser_idx` (`iduser`),
  CONSTRAINT `iduser` FOREIGN KEY (`iduser`) REFERENCES `users` (`idusers`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,3,NULL,NULL,1,NULL),(2,4,'2024-12-19','2024-12-19',1,NULL),(10,4,'2024-12-15','2024-12-22',0,NULL),(11,4,'2024-12-15','2024-12-22',0,NULL),(12,4,'2024-12-15','2024-12-22',0,NULL),(13,4,'2024-12-15','2024-12-22',0,NULL),(14,4,'2024-12-15','2024-12-22',0,NULL),(15,4,'2024-12-15','2024-12-22',0,NULL),(16,4,'2024-12-15','2024-12-22',0,NULL),(17,4,'2024-12-15','2024-12-22',0,NULL),(18,4,'2024-12-15','2024-12-22',0,NULL),(19,19,NULL,NULL,0,'kggjjjjjjjjh'),(20,19,NULL,NULL,0,'kggjjjjjjjjh'),(21,19,NULL,NULL,0,'kggjjjjjjjjh'),(22,19,NULL,NULL,0,'vbnm,'),(23,19,NULL,NULL,0,'vbnm,'),(24,19,NULL,NULL,0,'vbnm,'),(25,19,NULL,NULL,0,'vbnm,'),(26,19,NULL,NULL,0,'yjhghg'),(27,19,NULL,NULL,0,'uyhgbhk'),(28,19,NULL,NULL,0,'uyhgbhk'),(29,23,NULL,NULL,0,'לדמלל 20'),(30,23,NULL,NULL,0,'הדקל 24 אור יהודה'),(31,23,NULL,NULL,0,'הדקל 24 אור יהודה'),(32,23,NULL,NULL,0,'שד יעקב תל אביב'),(33,23,NULL,NULL,0,'הירדן 40 גבעתיים'),(34,23,NULL,NULL,0,'הדקל 20 אור יהודה '),(35,23,NULL,NULL,0,'vdgss20'),(36,23,NULL,NULL,0,'vgdj20'),(37,23,NULL,NULL,0,'הגדכדגע24'),(38,23,NULL,NULL,0,'gdfty12'),(39,23,NULL,NULL,0,'fvsedgfre20'),(40,23,NULL,NULL,0,'ברקת'),(41,23,'2025-03-20 11:01:29','2025-03-27 11:01:29',0,'הרקפת 20'),(42,23,'2025-03-20 11:03:39','2025-03-27 11:03:39',0,'הרקפת 20 ראשון לציון'),(43,23,'2025-03-20 12:33:56','2025-03-27 12:33:56',0,'ראשון לציון'),(44,23,'2025-03-27 11:46:21','2025-04-03 11:46:21',0,'בני ברק'),(45,23,'2025-03-27 11:56:42','2025-04-03 11:56:42',0,'בני ברק'),(46,23,'2025-03-27 11:56:54','2025-04-03 11:56:54',0,'כתובת'),(47,23,'2025-03-27 11:59:21','2025-04-03 11:59:21',0,'cbh cre'),(48,23,'2025-03-27 11:59:23','2025-04-03 11:59:23',0,'cbh cre'),(49,23,'2025-03-27 11:59:23','2025-04-03 11:59:23',0,'cbh cre'),(50,23,'2025-03-27 11:59:24','2025-04-03 11:59:24',0,'cbh cre'),(51,23,'2025-03-27 11:59:24','2025-04-03 11:59:24',0,'cbh cre'),(52,23,'2025-03-27 12:13:21','2025-04-03 12:13:21',0,'6resftrt');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
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

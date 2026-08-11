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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `idproducts` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `discrep` varchar(45) DEFAULT NULL,
  `createDate` date DEFAULT NULL,
  `idcategory` int DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `size` int DEFAULT NULL,
  `imgUrl` varchar(80) DEFAULT NULL,
  `isActive` varchar(45) DEFAULT '1',
  PRIMARY KEY (`idproducts`),
  KEY `idcategory_idx` (`idcategory`),
  CONSTRAINT `idcategory` FOREIGN KEY (`idcategory`) REFERENCES `category` (`idcategory`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'עגילי חישוק',40,'כסף 925 עמיד במים','2024-12-14',4,'כסף',9,'img.jpg','1'),(2,'טבעת גל',19,'כסף 925 עמיד במים','2024-12-14',2,'כסף',8,'img4.jpg','1'),(3,'שרשרת ארץ ישראל',36,'ציפוי זהב גולדפילד','2024-12-14',1,'זהב',NULL,'img2.jpg','0'),(10,'שרשרת חי',25,'כסף 925 עמיד במים','2020-12-05',1,'זהב',NULL,'imע3.jpg','1'),(13,'עגיל מטפס',48,'כסף 925 עמיד במים','2024-12-25',4,'זהב',8,'img5.jpg','1'),(14,'צמיד טניס',59,'מעכהמעס','2025-01-23',2,'כסף',1,'img6.jpg','1'),(17,'זוג עגילי אבן מרכזית',56,'כסף 925 עמיד במים ','2024-12-29',4,'כסף',1,'זוג עגילי אבן מרכזית.jpg','1'),(18,'זוג עגילי איב',29,'כסף 925 עמיד במים ','2024-12-13',4,'כסף',1,'זוג עגילי איב.jpg','1'),(19,' חישוק קטן פנינה נופלת',29,'כסף 925 עמיד במים ','2024-12-25',4,'כסף',1,'זוג עגילי חישוק קטן פנינה נופלת.jpg','1'),(20,'טבעת גורמט בשילוב פס',29,'כסף 925 עמיד במים ','2024-12-25',2,'כסף',1,'טבעת גורמט בשילוב פס.jpg','1'),(21,'טבעת זירקון סנפיר',19,'כסף 925 עמיד במים ','2024-12-02',2,'זהב',1,'טבעת זירקון סנפיר.jpg','1'),(22,'טבעת בשילוב פנינים',29,'כסף 925 עמיד במים ','2024-12-07',2,'זהב',1,'טבעת משובצת בשילוב פנינים מסולסלת.jpg','1'),(23,'טבעת סנייק',17,'כסף 925 עמיד במים ','2024-07-15',2,'זהב',1,'טבעת סנייק.jpg','1'),(24,'צמיד גורמט מונה',49,'כסף 925 עמיד במים','2024-12-21',3,'כסף',1,'צמיד גורמט מונה.jpg','1'),(26,'צמיד ורד חריטה',32,'כסף 925 עמיד במים ','2025-01-03',3,'כסף',1,'צמיד ורד חריטה.jpg','1'),(27,'mom שרשרת',48,'כסף 925 עמיד במים ','2025-01-15',3,'כסף',1,'שרשרת mom.jpg','1'),(28,'שרשרת אגם',29,'כסף 925 עמיד במים ','2025-01-07',4,'כסף',1,'שרשרת אגם.jpg','1'),(29,'צמיד האש שלי',27,'כסף 925 עמיד במים ','2025-01-23',3,'זהב',1,'צמיד האש שלי.jpg','1'),(30,'עגיל מעגל החיים',30,'כסף 925 עמיד במים ','2024-12-04',2,'כסף',1,'עגיל מעגל החיים.jpg','1'),(33,'שרשרת האש שלי ',55,'ציפוי זהב גולדפילד','2025-03-03',1,'זהב',1,'שרשרת האש שלי זהב.png','1'),(34,'זוג עגילי זירקון טיפה ',35,'כסף 925 עמיד במים ','2025-03-03',4,'כסף',1,'זוג עגילי זירקון טיפה מכסף אמיתי 925.png','1'),(35,'זוג עגילי פרח לוטוס בל ',29,'ציפוי זהב גולדפילד','2025-03-03',4,'זהב',1,'זוג עגילי פרח לוטוס בל זהב.png','1'),(36,'צמיד חבל דק',34,'כסף 925 עמיד במים ','2025-03-03',2,'כסף',1,'צמיד חבל דק.png','1'),(37,'טבעת ספירלה זהב',19,'ציפוי זהב גולדפילד','2025-03-03',2,'זהב',1,'טבעת ספירלה זהב.png','1'),(44,'צמיד שילוב תלתנים',29,'ציפוי זהב גולדפילד','2025-03-12',3,'זהב',2,'צמיד תלתנים.jpg','1'),(45,'ככ',228,'2קד','2025-02-10',1,'1',22,'צמיד האש שלי.jpg','0');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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

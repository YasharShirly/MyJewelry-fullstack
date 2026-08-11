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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idusers` int NOT NULL AUTO_INCREMENT,
  `mail` varchar(45) DEFAULT NULL,
  `password` varchar(70) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT 'USER',
  PRIMARY KEY (`idusers`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'dshirli02@gmail.com','12r4z5','שירלי','USER'),(2,'hfdgh@gmail.com','5te021','טל','USER'),(3,'kl2052@gmail.com','27540','שרה','USER'),(4,'kl2052@gmail.com','289hjj','צאלה','USER'),(5,'dshirli02@gmail.com','$2a$12$DNNOIbTYvIZ7z4EurD7aFuDGsU0LWvbqnAsYryGKdORApFqIYR/z2','שירלושש','USER'),(6,'ds@gmail.com','$2a$12$ZMAS5CX3KGqfvDDtkZeaOOFKsRlLIDG9XOfd9y1OwRu3tE6ShIdEi','שירלי','USER'),(7,'ds@gmail.com','$2a$12$YrkjKJUXWh/0OPmU3Nj3V.B4BrDel3D3LDNKM2H8ZOehjfsIP4HFO','שירלי','USER'),(8,'ds@gmail.com','$2a$12$2ZPcqqhBkB.Z69w4xAaMUeKhaJhE/wmI4Wi7XhqXQQUb1N0CfDb4W','שירלי','USER'),(9,'ds@gmail.com','$2a$12$V4bWHW/FAUfIpbqkuV5hsOk//mQmAN5XTjhxJlN9UKFMP/eG.o77.','שירלי','USER'),(10,'ds@gmail.com','$2a$12$SY.ElShOwFwzFxIkQIUS9OwlKa1kZ6SY89ew8Wwu.x46Y04nSoW6m','שירלי','USER'),(11,'ds@gmail.com','$2a$12$ntoKA0LmBf7NB1jymdACoOKj.UA68owqp0wjQ0ARcVJkYe/RN8Np2','שירלי','USER'),(12,'ds@gmail.com','$2a$12$ueOjPtVJut9QJx4JuLE.re0tCaaoWwFVIOiNWMBrhSX5qAs.80CO6','שירלי','USER'),(13,'ds@gmail.com','$2a$12$pP8yJwEnaWnbGAMXqxyn8uuUVO3EBYeK2qADQ1/PBlWzU5k4rOqF.','dfcfjgbkj','USER'),(14,'ds@gmail.com','$2a$12$a8lQabGTP4UBo3oqI1xo/.TgvWwdGleiaEGziMyuQmMqi6RdE3tEm','שירה','USER'),(15,'ds@gmail.com','$2a$12$uN8OmxgzdQsw/nVfIbSrruLriVFFqM.U9fQLlHJ9IXCt1cAM0ZrXC','שילת','USER'),(16,'ds@gmail.com','$2a$12$XuCwKV1h7Uly6s5ouobnIOjDis2CAcM2TiXzCxa7QYGP0m/dDE0AO','רחליי','USER'),(17,'ds@gmail.com','$2a$12$WfghRr4wkMo3gvms.rWiqOFB1L9Lnpdw9WGMVptR54N1VnUj3GoJK','שרשרת צדפה','USER'),(18,'dshirli02@gmail.com','$2a$12$N.U2j0JZQ4iBPhCDH2Wp2effCab8uw8mOsHjtBeKIRv97Hvjc2Hra','tiuyuyyt','USER'),(19,'tz@gmail.com','$2a$12$dO7kMFR2WGdNUCMPOchaluYUSl1icDu.fSlEk.gTR/ne6zSiavgqe','צאלה1','ADMIN'),(20,'ds@gmail.com','$2a$12$UqUeNQpOAMaAQG5tTUbVPu01QgMMletR/hj7dl0vaR0xmdGr9Y5vu','שירלי1','USER'),(21,'Sar@gmail.com','$2a$12$rJPHiwghYoGfOo4KB9xM0.7JAqEYqPaPqBoJAfWyE9Y5I8hPsyYF.','שרה1','USER'),(22,'Mor2@gmail.com','$2a$12$kbpln9TnjPujMsVxKf4NIe/mCPJ15Vnr/eLQsQMpIpBnViVwS3uhe','מוריה','USER'),(23,'Hi2@gmail.com','$2a$12$MjV0QDStLHiUzRj5Jyv9he/BAWyosm2REoTnC8aEUuhqIfeg/A7f.','הילה','USER'),(24,'Tl7@gmail.com','$2a$12$rYe/5iX12O13FE/o378Ty.EZKsKt7mHu75O46LAmL3il9ZdpL6XNa','טלטול','USER'),(25,'ds@gmail.com','$2a$12$FGKhHYFTY27dRkhIhYZrSOaWuVFakkITkd1a.BOsta8jfeXhJ9SIe','shirly','USER'),(26,'Gal2@gmail.com','$2a$12$IiiWHjXb8hq3fcYCE1Af8evKtje0zWiVz92yxBXieBOBSRTfV0MNW','גליה','USER'),(27,'Sl5@gmail.com','$2a$12$nUd2yvrF33/IJ9lWimmkmOdo6EFLppxo9j1AY9kXeMNi7V8e.go/S','שירה לאה','USER'),(28,'Fs@gmail.com','$2a$12$x2N9tlNP9gGeCgGx7G512uWcS4s713XRt0p5IZpAJNlYXsMbVQdR.','hghjgh','USER'),(29,'054@gmail.com','$2a$12$dnDpvRtEYcy6gRYUdhF8Yesl2rKt6wxvot6h9NG9Foy.K3tJQId1e','gggg','USER'),(30,'tz@gmail.com','$2a$12$Gchk8hp/vNm5264YjsbdG.F2.j.KwAjzmsaFw7LmxiZV8Y08CMMq6','צאלה19','USER'),(31,'th@gmail.com','$2a$12$9erqstOc0saCcLxdBuRgguS0jY6dm9FZ5FoDyPVuYgAet5r4h5G96','טוהר','USER');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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

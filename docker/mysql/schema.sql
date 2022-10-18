 ALTER DATABASE `oamarelinho` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci; 

-- -----------------------------------------------------
-- Schema oamarelinho
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `oamarelinho` ;
CREATE SCHEMA IF NOT EXISTS `oamarelinho` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `oamarelinho` ;

--
-- Estrutura da tabela "pais"
--
DROP TABLE IF EXISTS `oamarelinho`.`country` ;
CREATE TABLE IF NOT EXISTS `oamarelinho`.`country` (
  `id` INT NOT NULL,
  `name` VARCHAR(60) NULL,
  `name_pt-br` VARCHAR(60) NULL,
  `initials` VARCHAR(2) NULL,
  `bacen` INT(5) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `country_id_UNIQUE` (`id` ASC) VISIBLE,
  FULLTEXT INDEX `ft_country_name_name_pt-br_initials_idx` (`name`, `name_pt-br`, `initials`) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4;

--
-- Estrutura da tabela "estado"
--
DROP TABLE IF EXISTS `oamarelinho`.`state` ;
CREATE TABLE IF NOT EXISTS `oamarelinho`.`state` (
  `id` INT NOT NULL,
  `name` VARCHAR(75) NULL,
  `uf` VARCHAR(2) NULL,
  `ibge` INT(7) NULL,
  `ddd` VARCHAR(50) NULL,
  `country_id` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `state_id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_state_country_idx` (`country_id` ASC) VISIBLE,
  FULLTEXT INDEX `ft_state_name_uf_ddd_idx` (`name`, `uf`, `ddd`) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4;

--
-- Estrutura da tabela "cidade"
--
DROP TABLE IF EXISTS `oamarelinho`.`city` ;
CREATE TABLE IF NOT EXISTS `oamarelinho`.`city` (
  `id` INT NOT NULL,
  `name` VARCHAR(120) NULL,
  `ibge` INT(7) NULL,
  `state_id` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `city_id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_city_state_idx` (`state_id` ASC) VISIBLE,
  FULLTEXT INDEX `ft_city_name_idx` (`name`) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4;

--
-- Estrutura da tabela "empresa"
--
DROP TABLE IF EXISTS `oamarelinho`.`company` ;
CREATE TABLE IF NOT EXISTS `oamarelinho`.`company` (
  `id` INT NOT NULL,
  `name` VARCHAR(120) NOT NULL,
  `city_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `company_id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_company_city_idx` (`city_id` ASC) VISIBLE,
  FULLTEXT INDEX `ft_company_name_idx` (`name`) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4;

--
-- Estrutura da tabela "vaga"
--
DROP TABLE IF EXISTS `oamarelinho`.`job` ;
CREATE TABLE IF NOT EXISTS `oamarelinho`.`job` (
  `id` INT NOT NULL,
  `title` VARCHAR(60) NULL,
  `description` TEXT(5000) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `company_id` INT NOT NULL,
  `city_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `job_id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_job_company_idx` (`company_id` ASC) VISIBLE,
  INDEX `fk_job_city_idx` (`city_id` ASC) VISIBLE,
  FULLTEXT INDEX `ft_job_title_description_idx` (`title`, `description`) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4;
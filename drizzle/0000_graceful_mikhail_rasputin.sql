-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `Apps` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text,
	`alternativeText` text,
	`githubRepoName` text,
	`osArray` blob,
	`descriptions` blob,
	`logoURL` text,
	`in_development` numeric DEFAULT (TRUE)
);

*/
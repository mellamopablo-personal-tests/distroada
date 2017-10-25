<?php

require_once "BasicEnum.php";

abstract class EOSType extends BasicEnum {
	const LINUX = 0;
	const BSD = 1;
	const SOLARIS = 2;
	const OTHER = 3;
}

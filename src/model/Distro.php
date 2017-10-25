<?php

class Distro {

	public $id;
    public $name;

    /**
     * Instantiates a Distro
     * @param $id int The id of the Distro
     * @param $name string The name of the Distro
     */
    public function __construct(int $id, string $name)
    {
    	$this->id = $id;
        $this->name = $name;
    }

}

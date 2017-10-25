<?php

class DistroSummary {

	public $id;
    public $name;

    /**
     * Instantiates a DistroSummary
     * @param $id int The id of the Distro
     * @param $name string The name of the Distro
     */
    public function __construct(int $id, string $name)
    {
    	$this->id = $id;
        $this->name = $name;
    }

}

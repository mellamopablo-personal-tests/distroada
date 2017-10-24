<?php

class Distro {

    public $name;

    /**
     * Instantiates a Distro
     * @param $name string The name of the Distro
     */
    public function __construct(string $name)
    {
        $this->name = $name;
    }

}

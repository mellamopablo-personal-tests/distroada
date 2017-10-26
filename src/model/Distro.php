<?php

class Distro {

	public $id;
    public $name;
	public $homeUrl;
	public $mailingListsUrl;
	public $userForumsUrl;
	public $bugTrackerUrl;

    /**
     * Instantiates a Distro
     * @param $id int The id of the Distro
     * @param $name string The name of the Distro
	 * @param $homeUrl string An url to the main site of the distro
	 * @param $mailingListsUrl string An url to a site containing the mailing
	 * lists
	 * @param $userForumsUrl string An url to the user forums
	 * @param $bugTrackerUrl string An url to the bug tracker
     */
    public function __construct(
    	int $id,
		string $name,
		?string $homeUrl,
		?string $mailingListsUrl,
		?string $userForumsUrl,
		?string $bugTrackerUrl)
    {
    	$this->id = $id;
        $this->name = $name;
		$this->homeUrl = $homeUrl;
		$this->mailingListsUrl = $mailingListsUrl;
		$this->userForumsUrl = $userForumsUrl;
		$this->bugTrackerUrl = $bugTrackerUrl;
    }

}

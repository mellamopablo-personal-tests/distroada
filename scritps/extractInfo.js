/*

// Extracted with:

(table => {

    const trs = Array.from(table.querySelectorAll("tr.Background"))
	const rows = trs.map(tr => ({
        key: tr.children[0].textContent,
        value: tr.children[1].textContent
    }))

	copy(JSON.stringify(rows))

})(document.querySelector("table.Info"))

*/

const RAW_INFO = [
    {
        "distro": "Debian",
        "info": [
            {
                "key": "Distribution",
                "value": "Debian (formerly Debian GNU/Linux)"
            },
            {
                "key": "Home Page",
                "value": "http://www.debian.org/"
            },
            {
                "key": "Mailing Lists",
                "value": "http://lists.debian.org/"
            },
            {
                "key": "User Forums",
                "value": "http://forums.debian.net/"
            },
            {
                "key": "Alternative User Forums",
                "value": "LinuxQuestions.org"
            },
            {
                "key": "Documentation",
                "value": "\n      http://www.debian.org/doc/\n      Debianizzati (Italian)\n      Debian Administrator's Handbook\n    "
            },
            {
                "key": "Screenshots",
                "value": "http://screenshots.debian.net/ • DistroWatch Gallery"
            },
            {
                "key": "Screencasts",
                "value": ""
            },
            {
                "key": "Download Mirrors",
                "value": "\n      http://www.debian.org/distrib/ftplist\n      Debian on CD\n    "
            },
            {
                "key": "Bug Tracker",
                "value": "http://bugs.debian.org/"
            },
            {
                "key": "Related Websites",
                "value": "\n      debianHELP •\n      DebianHelp.co.uk •\n      Debian-Administration •\n      Bits from Debian •\n      Planet Debian •\n      About Debian •\n      Debian Wiki •\n      Debian Admin •\n      Debian Backports •\n      Debuntu •\n      Debian Brazil •\n      Debian Czech Republic •\n      Debian Czech Republic •\n      Debian France •\n      Debian France •\n      Debian Hong Kong •\n      Debian Italy •\n      Debian Italy •\n      Debian Japan •\n      Debian Portugal\n    "
            },
            {
                "key": "Reviews",
                "value": "\n    9.0: Dedoimedo •\n         Pro-Linux (German) •\n    DistroWatch\n    8.0: Everyday Linux User • \n    Pro-Linux (German) • \n    DistroWatch •\n    Heise (German)\n    7.0: Pro-Linux (German) •\n    ZDNet •\n    DistroWatch •\n    Blogspot\n    6.0: Everyday Linux User •\n    Linux User •\n    OS News •\n    Pro-Linux (German) •\n    DistroWatch •\n    eWEEK •\n    Heise Open (German)\n    5.0: Dedoimedo •\n    IT Reviews •\n    It's A Binary World •\n    Adventures in Open Source •\n    eWEEK •\n    LinuxBSDos •\n    SourceForge (Japanese) •\n    DeviceGuru •\n    Datamation •\n    The Register •\n    Heise Open (German)\n    4.0: Symsys •\n    Linuxoid (Russian) •\n    Free Software Magazine •\n    Linuxsoft (Czech) •\n    Techno Wizah\n    3.1: Linux DevCenter •\n    Linux.com\n    3.0: Linux.com •\n    ServerWatch •\n    DistroWatch\n  "
            },
            {
                "key": "Where To Buy",
                "value": "OSDisc.com (sponsored link)"
            }
        ]
    },
    {
        "distro": "Mageia",
        "info": [
            {
                "key": "Distribution",
                "value": "Mageia"
            },
            {
                "key": "Home Page",
                "value": "http://www.mageia.org/"
            },
            {
                "key": "Mailing Lists",
                "value": "https://www.mageia.org/mailman/"
            },
            {
                "key": "User Forums",
                "value": "https://forums.mageia.org/"
            },
            {
                "key": "Alternative User Forums",
                "value": "LinuxQuestions.org"
            },
            {
                "key": "Documentation",
                "value": "https://wiki.mageia.org/"
            },
            {
                "key": "Screenshots",
                "value": "DistroWatch Gallery"
            },
            {
                "key": "Screencasts",
                "value": ""
            },
            {
                "key": "Download Mirrors",
                "value": "\n      http://mageia.org/en/downloads/\n      http://mirrors.mageia.org/\n    "
            },
            {
                "key": "Bug Tracker",
                "value": "http://bugs.mageia.org/"
            },
            {
                "key": "Related Websites",
                "value": "\n      Mageia Planet •\n      Wikipedia •\n      Mageia Brazil •\n      Mageia China •\n      Mageia Czech Republic •\n      Mageia France •\n      Mageia Greece •\n      Mageia Italy •\n      Mageia Russia •\n      Mageia Thailand •\n      Mageia Turkey\n    "
            },
            {
                "key": "Reviews",
                "value": "\n    6: DistroWatch •\n       DarkDuck\n    5: DistroWatch •\n       Everyday Linux User •\n       ABCLinuxu (Czech) •\n    FOSS Force\n    4: Linux Review (Farsi) •\n    DistroWatch • \n    LinuxBSDos •\n    Blogspot •\n    ABC Linuxu (Czech) •\n    ZDNet •\n    Linux User\n    3: Desktop Linux Reviews •\n    Everyday Linux User •\n    ZDNet •\n    DistroWatch •\n    The Inquirer •\n    Blogspot\n    2: AbcLinuxu (Czech) •\n    Populyarno (Russian) •\n    ABC Linuxu (Czech) •\n    Linux Za Sve (Croatian) •\n    DarkDuck •\n    DistroWatch •\n    LinuxBSDos •\n    Linux User •\n    Wordpress\n    1: Wordpress •\n    Linux Review (Farsi) •\n    Linux is my life •\n    DarkDuck •\n    DistroWatch •\n    LinuxBSDos •\n    The Inquirer •\n    ZDNet Blogs\n    "
            },
            {
                "key": "Where To Buy",
                "value": "OSDisc.com (sponsored link)"
            }
        ]
    },
    {
        "distro": "Fedora",
        "info": [
            {
                "key": "Distribution",
                "value": "Fedora Project"
            },
            {
                "key": "Home Page",
                "value": "https://getfedora.org/"
            },
            {
                "key": "Mailing Lists",
                "value": "http://fedoraproject.org/wiki/Communicate"
            },
            {
                "key": "User Forums",
                "value": "https://forums.fedoraforum.org/"
            },
            {
                "key": "Alternative User Forums",
                "value": "LinuxQuestions.org"
            },
            {
                "key": "Documentation",
                "value": "\n      http://docs.fedoraproject.org/\n      http://fedoraproject.org/wiki/Docs\n    "
            },
            {
                "key": "Screenshots",
                "value": "https://fedoraproject.org/wiki/Category:Screenshots_library • DistroWatch Gallery"
            },
            {
                "key": "Screencasts",
                "value": ""
            },
            {
                "key": "Download Mirrors",
                "value": "\n      https://getfedora.org/\n      https://admin.fedoraproject.org/mirrormanager/mirrors\n      http://torrent.fedoraproject.org/\n    "
            },
            {
                "key": "Bug Tracker",
                "value": "https://bugzilla.redhat.com/"
            },
            {
                "key": "Related Websites",
                "value": "\n      Fedora Magazine •\n      Fedora Unity •\n      Remi's RPM Repository •\n      RPM Fusion •\n      RPM Search •\n      ATrpms •\n      Wikipedia •\n      Fedora Czech Republic •\n      Fedora France •\n      Fedora Germany •\n      Fedora Hungary •\n      Fedora Indonesia •\n      Fedora Italy •\n      Fedora Spain •\n      Fedora Poland\n    "
            },
            {
                "key": "Reviews",
                "value": "\n      26: Dedoimedo •\n          Pro-Linux (German) •\n          DistroWatch\n      25: Digiplace (Dutch) •\n          DarkDuck •\n          Everyday Linux User •\n          Dedoimedo •\n          Ars Technica •\n          Pro-Linux (German) •\n          DistroWatch •\n          Hectic Geek\n      24: Dedoimedo •\n          Pro-Linux (German) • \n          DistroWatch •\n          Unixmen •\n          LinuxFR.org (French) •\n          derStandard (German)\n      23: Dedoimedo •\n          Sayak Biswas •\n          LinuxBSDos •\n          Hectic Geek •\n          DistroWatch •\n          LinuxFR (French)\n      22: Ordinatechnic •\n      Dedoimedo •\n      DistroWatch •\n      HecticGeek • \n      Pro-Linux\n      21: Ars Technica •\n      Pro-Linux (German) •\n      Blogspot •\n      Dedoimedo •\n      DistroWatch •\n      Desktop Linux Reviews •\n      Hectic Geek •\n      Linux.com •\n      derStandard (German)\n      20: Digiplace (Dutch) •\n      Pro-Linux (German) •\n      Blogspot •\n      Dedoimedo •\n      derStandard (German)\n      19: Dedoimedo •\n      Dedoimedo •\n      derStandard (German) •\n      DistroWatch •\n      Blogspot •\n      derStandard (German) •\n      LinuxBSDos •\n      Hectic Geek •\n      Blogspot •\n      LinuxFR (French) •\n      Heise (German)\n      18: LinuxBSDos •\n      Wordpress •\n      Pro-Linux (German) •\n      Blogspot (Spanish) •\n      DistroWatch •\n      Blogspot •\n      Dedoimedo •\n      Wordpress •\n      Heise Open (German)\n      17: Blogspot •\n      LinuxBSDos •\n      Dedoimedo •\n      DistroWatch •\n      Linux For You •\n      Blogspot •\n      Wordpress •\n      derStandard (German)\n      16: Tom's Hardware •\n      Dedoimedo •\n      LinuxBSDos •\n      Linux Review (Farsi) •\n      Dedoimedo •\n      The Register •\n      Pro-Linux (German) •\n      Linux User •\n      DistroWatch •\n      Wordpress •\n      LinuxEXPRESS (Slovak) •\n      Heise (German) •\n      derStandard (German)\n      15: Techgage •\n      LinuxBSDos •\n      Pro-Linux (German) •\n      Computing •\n      DistroWatch •\n      LinuxBSDos •\n      MuyLinux (Spanish) •\n      derStandard (German) •\n      Dedoimedo •\n      LinuxBSDos •\n      Wordpress •\n      Ars Technica •\n      Heise Open (German)\n      14: IT Lure •\n      Linux User •\n      Dedoimedo •\n      LinuxBSDos •\n      Pro-Linux (German) •\n      DistroWatch •\n      derStandard (German) •\n      The Register •\n      Heise Open (German) •\n      ITworld\n      13: Dedoimedo •\n      LinuxBSDos •\n      Pro-Linux (German) •\n      DistroWatch •\n      Blogspot •\n      derStandard (German) •\n      The Register •\n      Heise Open (German)\n      12: Dedoimedo •\n      MakeUseOf •\n      Adventures in Open Source •\n      Pro-Linux (German) •\n      DistroWatch •\n      The Register •\n      Heise Open (German)\n      11: TuxRadar •\n      Adventures in Open Source •\n      Pro-Linux (German) •\n      DistroWatch •\n      Heise Open (German)\n      10: It's A Binary World •\n      HeadshotGamer •\n      eWEEK •\n      Pro-Linux (German) •\n      ABC Linuxu (Czech) •\n      MontanaLinux •\n      Root.cz (Czech) •\n      Channel Register •\n      Heise Open (German) •\n      Tux-planet (French)\n      9: It's A Binary World •\n      Linuxoid (Russian) •\n      Pro-Linux (German) •\n      PC Advisor •\n      Root.cz (Czech) •\n      Tech Source •\n      Heise Open (German) •\n      Reg Developer\n      8: Linuxoid (Russian) •\n      Terrell Prudé •\n      Pro-Linux (German) •\n      DistroWatch •\n      Root.cz (Czech) •\n      Heise Open (German)\n      7: LinuxLinks •\n      PC Advisor •\n      ITmedia (Japanese) •\n      DistroWatch •\n      Tuxmachines •\n      Heise Open (German) •\n      ABC Linuxu (Czech)\n      6: Enterprise Networking Planet •\n      Free-Bees •\n      Brad-X •\n      Heise Open (German) •\n      Linux Forums •\n      Red Hat Magazine •\n      Phoronix\n      5: Red Hat Magazine •\n      Free-bees •\n      OSNews •\n      Linux Forums\n      4: Free-Bees •\n      Tux:Tops •\n      ABC Linuxu (Czech) •\n      Red Hat Magazine\n      3: Linux-Noob •\n      OSNews •\n      Red Hat Magazine •\n      OSNews\n      2: OSNews •\n      OSNews •\n      OSNews •\n      OSNews\n      1: Pro-Linux (German) •\n      OSNews •\n      OSNews\n    "
            },
            {
                "key": "Where To Buy",
                "value": "OSDisc.com (sponsored link)"
            }
        ]
    },
    {
        "distro": "openSUSE",
        "info": [
            {
                "key": "Distribution",
                "value": "openSUSE (formerly SUSE Linux)"
            },
            {
                "key": "Home Page",
                "value": "http://www.opensuse.org/"
            },
            {
                "key": "Mailing Lists",
                "value": "http://en.opensuse.org/openSUSE:Communication_channels"
            },
            {
                "key": "User Forums",
                "value": "http://forums.opensuse.org/"
            },
            {
                "key": "Alternative User Forums",
                "value": "LinuxQuestions.org"
            },
            {
                "key": "Documentation",
                "value": "http://en.opensuse.org/Portal:Documentation"
            },
            {
                "key": "Screenshots",
                "value": "http://en.opensuse.org/Screenshots • DistroWatch Gallery"
            },
            {
                "key": "Screencasts",
                "value": ""
            },
            {
                "key": "Download Mirrors",
                "value": "\n      http://software.opensuse.org/\n      http://mirrors.opensuse.org/list/all.html\n    "
            },
            {
                "key": "Bug Tracker",
                "value": "http://bugs.opensuse.org/"
            },
            {
                "key": "Related Websites",
                "value": "\n      openSUSE News •\n      openSUSE Community •\n      Planet SUSE •\n      openSUSE Guide •\n      SUSEGeek •\n      APT for SUSE •\n      Links2Linux.de •\n      Wikipedia •\n      openSUSE Brazil •\n      openSUSE Czech Republic •\n      openSUSE France •\n      openSUSE Hungary •\n      openSUSE Italy •\n      openSUSE Poland •\n      openSUSE Russia •\n      openSUSE Spain\n    "
            },
            {
                "key": "Reviews",
                "value": "\n      Tumbleweed: Ordinatechnic •\n       LWN\n      42.3: Dedoimedo •\n            Pro-Linux (German) •\n            DistroWatch\n      42.2: Dedoimedo •\n            Everyday Linux User •\n            Dedoimedo •\n      DistroWatch\n      42.1: Dedoimedo •\n      Pro-Linux (German) • \n      DistroWatch •\n      Ordinatechnic •\n      LinuxFR (French)\n      13.2: Dedoimedo •\n      Ordinatechnic •\n      Wordpress (Russian) •\n      Dedoimedo •\n      DistroWatch •\n      LinuxFR •\n      Heise (German) •\n      Every Day Linux User\n      13.1: Blogspot •\n      Linux.com •\n      TalLinux •\n      DistroWatch •\n      Dedoimedo •\n      Blogspot •\n      derStandard (German)\n      12.x: Dedoimedo •\n      Pro-Linux (German) •\n      Guia do PC (Portuguese) •\n      DistroWatch •\n      HecticGeek •\n      The Register •\n      LWN •\n      ZDNet •\n      Heise Open (German) •\n      BeginLinux •\n      Wordpress •\n      Linux Za Sve (Croatian) •\n      DistroWatch •\n      Blogspot •\n      Dedoimedo •\n      Linux Za Sve (Croatian) •\n      Heise Open (German) •\n      Linux Za Sve (Croatian) •\n      Dedoimedo •\n      Pro-Linux (German) •\n      Linux Review (Farsi) •\n      Wordpress •\n      My Linux Rig •\n      OverBlog (French) •\n      DistroWatch •\n      Dedoimedo •\n      openSUSE.cz (Czech) •\n      Linux User •\n      derStandard (German) •\n      Heise Open (German)\n      11.x: Dedoimedo •\n      Linux Review (Persian) •\n      MuyComputer (Spanish) •\n      Index (Hungarian) •\n      LWN •\n      ITworld •\n      DistroWatch •\n      MyBroadband •\n      Linux User •\n      Blogspot •\n      The Register •\n      openSUSE.cz (Czech) •\n      Linux EXPRESS (Czech) •\n      Pro-Linux (German) •\n      Heise Open (German) •\n      derStandard (German) •\n      PC Advisor •\n      Dedoimedo •\n      Wordpress •\n      LinMagazine (Hebrew) •\n      derStandard (German) •\n      Computerworld Blogs •\n      Heise Open (German) •\n      LinuxEXPRES (Czech) •\n      Dedoimedo •\n      MakeUseOf •\n      Pro-Linux (German) •\n      Adventures in Open Source •\n      SourceForge (Japanese) •\n      LWN •\n      Dedoimedo •\n      DistroWatch •\n      Linux EXPRESS (Czech) •\n      Wordpress (Russian) •\n      Heise Open (German) •\n      Wordpress •\n      Radio World •\n      It's A Binary World •\n      HeadshotGamer •\n      Linux EXPRESS (Czech) •\n      Pro-Linux (German) •\n      DistroWatch •\n      Heise Open (German) •\n      ABC Linuxu (Czech) •\n      Ars Technica •\n      Linuxoid (Russian) •\n      LinuxPlanet •\n      It's A Binary World •\n      LinuxPlanet •\n      Guia do PC (Portuguese) •\n      Pro-Linux (German) •\n      Linux Express (Czech) •\n      Root.cz (Czech) •\n      HTML.it (Italian) •\n      Blogspot •\n      Heise Open (German) •\n      ABC Linuxu (Czech) •\n      The Register\n      10.x: Download Squad •\n      Linuxoid (Russian) •\n      Blogspot •\n      Mandrake Tips4Free •\n      ABC Linuxu (Czech) •\n      Root.cz (Czech) •\n      DistroWatch •\n      Pro-Linux (German) •\n      Tuxmachines •\n      Blogspot •\n      Heise Open (German) •\n      Blogspot •\n      Blogspot •\n      ABC Linuxu (Czech) •\n      Guia do Hardware (Portuguese) •\n      Free-Bees •\n      Wordpress •\n      InformationWeek •\n      Tuxmachines •\n      LinuxForums •\n      Blogbeebe (Part 1, Part 2, Part 3) •\n      JonRob's Blog •\n      Heise Open (German) •\n      Pro-Linux (German) •\n      Tuxmachines •\n      Free-Bees •\n      ABC Linuxu (Czech) •\n      Pro-Linux (German) •\n      Groklaw •\n      Linux-Noob •\n      Tuxmachines\n      9.x: Forever For Now •\n      Index.hu (Hungarian) •\n      Hardware Upgrade (Italian) •\n      Pro-Linux (German) •\n      Cool Solutions •\n      Linux-Noob •\n      Cool Solutions •\n      Mandrake Tips4Free •\n      OSNews •\n      Linux Gazette •\n      OSNews •\n      OSNews •\n      Pro-Linux (German) •\n      OSNews •\n      Linux Magazine (PDF) •\n      OSNews •\n      OSNews •\n      OSNews •\n      Pro-Linux (German) •\n      LWN •\n      Sydney Morning Herald •\n      Pro-Linux (German)\n      8.x: Linux Journal •\n      OSNews •\n      Linux Journal •\n      OSNews •\n      DistroWatch\n    "
            },
            {
                "key": "Where To Buy",
                "value": "OSDisc.com (sponsored link)"
            }
        ]
    },
    {
        "distro": "Arch Linux",
        "info": [
            {
                "key": "Distribution",
                "value": "Arch Linux"
            },
            {
                "key": "Home Page",
                "value": "http://www.archlinux.org/"
            },
            {
                "key": "Mailing Lists",
                "value": "http://www.archlinux.org/mailman/listinfo"
            },
            {
                "key": "User Forums",
                "value": "http://bbs.archlinux.org/"
            },
            {
                "key": "Alternative User Forums",
                "value": "LinuxQuestions.org"
            },
            {
                "key": "Documentation",
                "value": "http://wiki.archlinux.org/"
            },
            {
                "key": "Screenshots",
                "value": "DistroWatch Gallery"
            },
            {
                "key": "Screencasts",
                "value": ""
            },
            {
                "key": "Download Mirrors",
                "value": "http://www.archlinux.org/download/ • LinuxTracker.org"
            },
            {
                "key": "Bug Tracker",
                "value": "http://bugs.archlinux.org/"
            },
            {
                "key": "Related Websites",
                "value": "\n      Planet Arch •\n      Arch for Raspberry Pi •\n      Wikipedia •\n      Arch Brazil •\n      Arch Chile •\n      Arch Denmark •\n      Arch France •\n      Arch Germany •\n      Arch Hungary •\n      Arch Italy •\n      Arch Russia •\n      Arch Spain •\n      Arch Turkey\n    "
            },
            {
                "key": "Reviews",
                "value": "\n      2016: Keith Curtis\n      2015: DistroWatch •\n            Keith Curtis • \n\t    LWN\n      2011: Guillermo Garron\n      2010: ITworld •\n      LWN\n      2009: It's A Binary World •\n      DistroWatch •\n      Adventures in Open Source •\n      Polishlinux\n      2008: Guia do PC (Portuguese) •\n      DistroWatch •\n      OStatic •\n      Blogspot •\n      Wordpress\n      2007: Blogspot\n      0.8: Polishlinux •\n      Pro-Linux (German) •\n      Skatox (Spanish) •\n      Tuxmachines\n      0.7: USALUG •\n      Wordpress •\n      OSNews •\n      LinMagazine (Hebrew) •\n      Linux Magazine (PDF) •\n      LinuxUser (German) •\n      ABC Linuxu (Czech) •\n      OSNews •\n      LWN •\n      OSNews\n      0.5: OSNews •\n      OSNews\n      0.3: OSNews\n    "
            },
            {
                "key": "Where To Buy",
                "value": "OSDisc.com (sponsored link)"
            }
        ]
    },
    {
        "distro": "CentOS",
        "info": [
            {
                "key": "Distribution",
                "value": "CentOS"
            },
            {
                "key": "Home Page",
                "value": "http://www.centos.org/"
            },
            {
                "key": "Mailing Lists",
                "value": "http://wiki.centos.org/GettingHelp/ListInfo"
            },
            {
                "key": "User Forums",
                "value": "https://www.centos.org/forums/"
            },
            {
                "key": "Alternative User Forums",
                "value": "LinuxQuestions.org"
            },
            {
                "key": "Documentation",
                "value": "http://wiki.centos.org/"
            },
            {
                "key": "Screenshots",
                "value": "DistroWatch Gallery"
            },
            {
                "key": "Screencasts",
                "value": ""
            },
            {
                "key": "Download Mirrors",
                "value": "\n      http://www.centos.org/download/\n      http://www.centos.org/download/mirrors/\n    "
            },
            {
                "key": "Bug Tracker",
                "value": "http://bugs.centos.org/"
            },
            {
                "key": "Related Websites",
                "value": "\n      Wikipedia •\n      CentOS Italy •\n      CentOS Thailand\n    "
            },
            {
                "key": "Reviews",
                "value": "\n      7.x: DarkDuck •\n      Dedoimedo •\n      HTML.it (Italian) •\n      LWN •\n      Dedoimedo\n      6.x: DistroWatch •\n      ZDNet Blogs •\n      LinuxBSDos •\n      Dedoimedo\n      5.x: It's A Binary World •\n      Heitor Augusto Murari Cardozo (Portuguese) •\n      Blogspot •\n      Polishlinux\n      4.x: Software in Review •\n      ABC Linuxu (Czech) •\n      Internet.com (Japanese)\n    "
            },
            {
                "key": "Where To Buy",
                "value": "OSDisc.com (sponsored link)"
            }
        ]
    },
    {
        "distro": "PCLinuxOS",
        "info": [
            {
                "key": "Distribution",
                "value": "PCLinuxOS"
            },
            {
                "key": "Home Page",
                "value": "http://www.pclinuxos.com/"
            },
            {
                "key": "Mailing Lists",
                "value": "--"
            },
            {
                "key": "User Forums",
                "value": "http://www.pclinuxos.com/forum"
            },
            {
                "key": "Alternative User Forums",
                "value": "LinuxQuestions.org"
            },
            {
                "key": "Documentation",
                "value": "--"
            },
            {
                "key": "Screenshots",
                "value": "DistroWatch Gallery"
            },
            {
                "key": "Screencasts",
                "value": ""
            },
            {
                "key": "Download Mirrors",
                "value": "http://pclinuxos.com/?page_id=10 • LinuxTracker.org"
            },
            {
                "key": "Bug Tracker",
                "value": "--"
            },
            {
                "key": "Related Websites",
                "value": "\n      LinFX •\n      PCLinuxOS Brazil •\n      PCLinuxOS Denmark •\n      PCLinuxOS Finland •\n      PCLinuxOS France •\n      PCLinuxOS Italy •\n      PCLinuxOS Netherlands •\n      PCLinuxOS Poland •\n      PCLinuxOS Russia •\n      Wikipedia\n    "
            },
            {
                "key": "Reviews",
                "value": "\n      2017: DistroWatch •\n            ABC Linuxu (Czech)\n      2016: DarkDuck •\n            DistroWatch •\n            Everyday Linux User\n      2014: DistroWatch •\n      Wordpress\n      2013: Blogspot •\n      DistroWatch •\n      Linux.com\n      2012: Dedoimedo •\n      Blogspot •\n      Wordpress •\n      Dedoimedo •\n      Linux Review (Farsi) •\n      Darkduck •\n      Gnuman\n      2011: Dedoimedo •\n      DistroWatch •\n      LinuxBSDos •\n      Linux.com •\n      ZDNet Blogs\n      2010: Dedoimedo •\n      Tanner Helland •\n      Tech •\n      Tech •\n      Linux Journal •\n      Dedoimedo •\n      Blogspot •\n      OSNews\n      2009: IT Lure •\n      Blogspot •\n      LinuxBSDos •\n      Dedoimedo •\n      Wordpress •\n      Tech Source\n      2008: Linuxoid (Russian) •\n      Wordpress\n      2007: IT Reviews •\n      DistroWatch •\n      Wordpress •\n      Seopher •\n      Linux.com •\n      ThePCSpy\n    "
            },
            {
                "key": "Where To Buy",
                "value": "OSDisc.com (sponsored link)"
            }
        ]
    },
    {
        "distro": "Slackware Linux",
        "info": [
            {
                "key": "Distribution",
                "value": "The Slackware Linux Project"
            },
            {
                "key": "Home Page",
                "value": "http://www.slackware.com/"
            },
            {
                "key": "Mailing Lists",
                "value": "\n      http://www.slackware.com/lists/\n      http://mailman.lug.org.uk/mailman/listinfo/slackware (unofficial)\n    "
            },
            {
                "key": "User Forums",
                "value": "--"
            },
            {
                "key": "Alternative User Forums",
                "value": "LinuxQuestions.org"
            },
            {
                "key": "Documentation",
                "value": "\n      http://docs.slackware.com/\n      The Revised Slackware Book Project\n    "
            },
            {
                "key": "Screenshots",
                "value": "DistroWatch Gallery"
            },
            {
                "key": "Screencasts",
                "value": ""
            },
            {
                "key": "Download Mirrors",
                "value": "http://www.slackware.com/getslack/ • http://mirrors.slackware.com/mirrorlist/ • LinuxTracker.org"
            },
            {
                "key": "Bug Tracker",
                "value": "--"
            },
            {
                "key": "Related Websites",
                "value": "\n      SlackBuilds •\n      rworkman's Slackware Packages •\n      Alien's Slackware Packages •\n      Alien Live Slackwareblog •\n      SlackBlogs •\n      Sbopkg •\n      Slackbook •\n      Dropline GNOME •\n      SlackE17 •\n      MATE SlackBuilds •\n      Cinnamon SlackBuilds •\n      Slint •\n      Wikipedia •\n      Slackware Brazil •\n      Slackware Czech Republic •\n      Slackware France •\n      Slackware Germany •\n      Slackware Indonesia •\n      Slackware Italy •\n      Slackware Italy •\n      Slackware Poland •\n      Slackware Russia •\n      Slackware Serbia •\n      Slackware Sweden\n    "
            },
            {
                "key": "Reviews",
                "value": "\n      14.2: Pro-Linux (German) •\n      DistroWatch •\n      ParanoidPenguin\n      14.1: Elemans\n      14.0: Pro-Linux (German) •\n      DistroWatch •\n      Genbeta (Spanish) •\n      Robby Pedrica’s Tech Blog\n      13.x: Blogspot •\n      DistroWatch •\n      Linux.com •\n      Linux Review (Persian) •\n      Robby Pedrica's Tech Blog •\n      LWN •\n      Robby Pedrica's Tech Blog •\n      Linux Journal •\n      Open Your Mind (Romanian) •\n      It's A Binary World •\n      DistroWatch •\n      LWN •\n      Robby Pedrica's Tech Blog\n      12.x: It's A Binary World •\n      Linux.com •\n      Robby Pedrica's Tech Blog •\n      O'Reilly News •\n      Linux.com •\n      Linuxoid (Russian) •\n      Linux.com •\n      Tuxmachines •\n      LinMagazine (Hebrew)\n      11.x: aboutLinux •\n      Linux.com\n      10.x: LWN •\n      Tuxmachines •\n      OSNews •\n      LWN •\n      OSNews\n      9.x: OSNews •\n      OSNews •\n      OSNews\n      8.x: DistroWatch\n    "
            },
            {
                "key": "Where To Buy",
                "value": "OSDisc.com (sponsored link)"
            }
        ]
    },
    {
        "distro": "FreeBSD",
        "info": [
            {
                "key": "Distribution",
                "value": "FreeBSD"
            },
            {
                "key": "Home Page",
                "value": "http://www.freebsd.org/"
            },
            {
                "key": "Mailing Lists",
                "value": "http://www.freebsd.org/community/mailinglists.html"
            },
            {
                "key": "User Forums",
                "value": "http://forums.freebsd.org/"
            },
            {
                "key": "Alternative User Forums",
                "value": "LinuxQuestions.org"
            },
            {
                "key": "Documentation",
                "value": "http://www.freebsd.org/docs.html"
            },
            {
                "key": "Screenshots",
                "value": " "
            },
            {
                "key": "Screencasts",
                "value": ""
            },
            {
                "key": "Download Mirrors",
                "value": "\n      http://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/mirrors-ftp.html\n    "
            },
            {
                "key": "Bug Tracker",
                "value": "http://www.freebsd.org/support/bugreports.html"
            },
            {
                "key": "Related Websites",
                "value": "\n      FreeBSD Wiki •\n      FreeBSD News •\n      The FreeBSD Diary •\n      FreeBSD Planet •\n      FreeBSD Custom Releases •\n      The FreeBSD Mall •\n      FreeBSD for Raspberry Pi •\n      VirtualBSD •\n      FreshPorts •\n      FreeBSD Ports •\n      FreeBSD System Administration Training •\n      DaemonForums •\n      BSDNexus •\n      The FreeBSD Foundation •\n      BSDSupport •\n      BSD DevCenter •\n      Super User's BSD Cross Referrence •\n      Manual Pages •\n      Wikipedia •\n      FreeBSD Italy •\n      BSDForen.de (German) •\n      BSDGuru (Polish)\n    "
            },
            {
                "key": "Reviews",
                "value": "\n      11.x: Pro-Linux (German) •\n      DistroWatch\n      10.x: DistroWatch\n      9.x: OSNews •\n      DistroWatch\n      8.x: O'Reilly Broadcast •\n      LWN\n      7.x: Linuxoid (Russian) •\n      Wordpress\n      6.x: Blogspot •\n      ServerWatch •\n      about Linux •\n      Tuxmachines\n      5.x: DistroWatch •\n      OSNews\n      4.x: OSNews\n    "
            },
            {
                "key": "Where To Buy",
                "value": "The FreeBSD Mall"
            }
        ]
    }
];

const statements = RAW_INFO
    .map(e => {

        const find = key => {
            const obj = e.info.find(pair => pair.key === key);
            return obj
                ? (obj.value === "--" ? null : `'${obj.value}'`)
                : null
        };

        return `('${e.distro}', ${find("Home Page")}, ${find("Mailing Lists")}, ${find("User Forums")}, ${find("Bug Tracker")})`

    })
    .map(s => `INSERT INTO distros (name, home_url, mailing_lists_url, user_forums_url, bug_tracker_url) VALUES ${s};`);

console.log(statements.join('\n'));
<?php

namespace App\Entity;

use App\Repository\WebsiteRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: WebsiteRepository::class)]
class Website
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $domain_name;

    #[ORM\ManyToOne(targetEntity: RankedPage::class, inversedBy: 'website_id')]
    private $RankedWebsiteRelation;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDomainName(): ?string
    {
        return $this->domain_name;
    }

    public function setDomainName(string $domain_name): self
    {
        $this->domain_name = $domain_name;

        return $this;
    }

    public function getRankedWebsiteRelation(): ?RankedPage
    {
        return $this->RankedWebsiteRelation;
    }

    public function setRankedWebsiteRelation(?RankedPage $RankedWebsiteRelation): self
    {
        $this->RankedWebsiteRelation = $RankedWebsiteRelation;

        return $this;
    }
}

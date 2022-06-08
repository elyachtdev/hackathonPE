<?php

namespace App\Entity;

use App\Repository\KeywordRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: KeywordRepository::class)]
class Keyword
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $keyword;

    #[ORM\Column(type: 'integer')]
    private $monthly_search_count;

    #[ORM\ManyToOne(targetEntity: RankedPage::class, inversedBy: 'keyword_id')]
    private $RankedKeywordRelation;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getKeyword(): ?string
    {
        return $this->keyword;
    }

    public function setKeyword(string $keyword): self
    {
        $this->keyword = $keyword;

        return $this;
    }

    public function getMonthlySearchCount(): ?int
    {
        return $this->monthly_search_count;
    }

    public function setMonthlySearchCount(int $monthly_search_count): self
    {
        $this->monthly_search_count = $monthly_search_count;

        return $this;
    }

    public function getRankedKeywordRelation(): ?RankedPage
    {
        return $this->RankedKeywordRelation;
    }

    public function setRankedKeywordRelation(?RankedPage $RankedKeywordRelation): self
    {
        $this->RankedKeywordRelation = $RankedKeywordRelation;

        return $this;
    }
}

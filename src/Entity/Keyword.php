<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Keyword
 *
 * @ORM\Table(name="keyword", indexes={@ORM\Index(name="keyword", columns={"keyword"})})
 * @ORM\Entity
 */
class Keyword
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="keyword", type="string", length=250, nullable=false)
     */
    private $keyword;

    /**
     * @var int
     *
     * @ORM\Column(name="monthly_search_count", type="integer", nullable=false)
     */
    private $monthlySearchCount;

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
        return $this->monthlySearchCount;
    }

    public function setMonthlySearchCount(int $monthlySearchCount): self
    {
        $this->monthlySearchCount = $monthlySearchCount;

        return $this;
    }


}

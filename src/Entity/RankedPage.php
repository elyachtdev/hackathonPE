<?php

namespace App\Entity;

use App\Repository\RankedPageRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * RankedPage
 *
 * @ORM\Table(name="ranked_page", indexes={@ORM\Index(name="website_id", columns={"website_id"}), @ORM\Index(name="keyword_id", columns={"keyword_id"})})
 * @ORM\Entity
 */
#[ORM\Entity(repositoryClass: RankedPageRepository::class)]
class RankedPage
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
     * @ORM\Column(name="url", type="text", length=65535, nullable=false)
     */
    private $url;

    /**
     * @var int
     *
     * @ORM\Column(name="rank", type="integer", nullable=false)
     */
    private $rank;

    /**
     * @var int
     *
     * @ORM\Column(name="visibility_score", type="integer", nullable=false)
     */
    private $visibilityScore;

    /**
     * @var int
     *
     * @ORM\Column(name="website_id", type="integer", nullable=false)
     */
    private $websiteId;

    /**
     * @var int
     *
     * @ORM\Column(name="keyword_id", type="integer", nullable=false)
     */
    private $keywordId;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getRank(): ?int
    {
        return $this->rank;
    }

    public function setRank(int $rank): self
    {
        $this->rank = $rank;

        return $this;
    }

    public function getVisibilityScore(): ?int
    {
        return $this->visibilityScore;
    }

    public function setVisibilityScore(int $visibilityScore): self
    {
        $this->visibilityScore = $visibilityScore;

        return $this;
    }

    public function getWebsiteId(): ?int
    {
        return $this->websiteId;
    }

    public function setWebsiteId(int $websiteId): self
    {
        $this->websiteId = $websiteId;

        return $this;
    }

    public function getKeywordId(): ?int
    {
        return $this->keywordId;
    }

    public function setKeywordId(int $keywordId): self
    {
        $this->keywordId = $keywordId;

        return $this;
    }


}

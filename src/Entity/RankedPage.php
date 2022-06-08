<?php

namespace App\Entity;

use App\Repository\RankedPageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RankedPageRepository::class)]
class RankedPage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $url;

    #[ORM\Column(type: 'integer')]
    private $rank;

    #[ORM\Column(type: 'integer')]
    private $visibility_score;

    #[ORM\OneToMany(mappedBy: 'RankedWebsiteRelation', targetEntity: Website::class)]
    private $website_id;

    #[ORM\OneToMany(mappedBy: 'RankedKeywordRelation', targetEntity: Keyword::class)]
    private $keyword_id;

    public function __construct()
    {
        $this->website_id = new ArrayCollection();
        $this->keyword_id = new ArrayCollection();
    }

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
        return $this->visibility_score;
    }

    public function setVisibilityScore(int $visibility_score): self
    {
        $this->visibility_score = $visibility_score;

        return $this;
    }

    /**
     * @return Collection<int, Website>
     */
    // public function getWebsiteId(): Collection
    // {
    //     return $this->website_id;
    // }

    // public function addWebsiteId(Website $websiteId): self
    // {
    //     if (!$this->website_id->contains($websiteId)) {
    //         $this->website_id[] = $websiteId;
    //         $websiteId->setRankedWebsiteRelation($this);
    //     }

    //     return $this;
    // }

    // public function removeWebsiteId(Website $websiteId): self
    // {
    //     if ($this->website_id->removeElement($websiteId)) {
    //         // set the owning side to null (unless already changed)
    //         if ($websiteId->getRankedWebsiteRelation() === $this) {
    //             $websiteId->setRankedWebsiteRelation(null);
    //         }
    //     }

    //     return $this;
    // }

    // /**
    //  * @return Collection<int, Keyword>
    //  */
    // public function getKeywordId(): Collection
    // {
    //     return $this->keyword_id;
    // }

    // public function addKeywordId(Keyword $keywordId): self
    // {
    //     if (!$this->keyword_id->contains($keywordId)) {
    //         $this->keyword_id[] = $keywordId;
    //         $keywordId->setRankedKeywordRelation($this);
    //     }

    //     return $this;
    // }

    // public function removeKeywordId(Keyword $keywordId): self
    // {
    //     if ($this->keyword_id->removeElement($keywordId)) {
    //         // set the owning side to null (unless already changed)
    //         if ($keywordId->getRankedKeywordRelation() === $this) {
    //             $keywordId->setRankedKeywordRelation(null);
    //         }
    //     }

    //     return $this;
    // }
}

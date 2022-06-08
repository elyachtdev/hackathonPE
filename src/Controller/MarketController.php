<?php

namespace App\Controller;

use App\Entity\RankedPage;
use Doctrine\ORM\EntityManager;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api", name="api_")
 */
class MarketController extends AbstractController
{
    #[Route('/market', name: 'app_market')]
    public function index(ManagerRegistry $doctrine): Response
    {
        $markets = $doctrine->getRepository(RankedPage::class)->findBy(
            ['url' => 'https://www.e.leclerc/cat/culture'],
            ['visibility_score' => 'ASC']
        );

        return $this->json($markets);
    }
}

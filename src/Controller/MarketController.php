<?php

namespace App\Controller;

use App\Entity\RankedPage;
use App\Repository\RankedPageRepository;
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
    public function index(RankedPageRepository $repo): Response
    {
        // $min_rank = 50000;
        $markets = $repo->findSearchRanking();

        return $this->json($markets);
    }
}

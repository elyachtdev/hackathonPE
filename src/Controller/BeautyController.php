<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class BeautyController extends AbstractController
{

    private $client;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }


    #[Route('/beauty', name: 'app_beauty')]
    public function index(): Response
    {

        //$url = 'https://fr.openbeautyfacts.org?json=true';

        $response = $this->client->request(
            'GET',
            'https://fr.openbeautyfacts.org?json=true&search_terms=parfum'
        );


//Bonne requête
//Bonne requête
//Bonne requête

//https://fr.openbeautyfacts.org?json=true&search_terms=parfum

        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];

        $serializer = new Serializer($normalizers, $encoders);


        $resp = $serializer->decode($response->getContent(), 'json');

        dump('resp', $resp);
        

        $products = $resp['products'];

        dump('product', $products);

        // dump('products', $products);

        
        // $produit = array();

        // dump('product', $products);



        // foreach ($products as $key => $value) {
            
        //     array_push($produit, $value['_keywords'])  ;

        // }

        // dump('produit', $produit);

        // for ($i=0; $i < sizeof($products) ; $i++) { 
            
        //     // array_push($produit, $products['product_name']);
        //     dump($products['product_name']);

        // }
        // dump($produit);



    //    return new JsonResponse($resp['products']); 
        return $this->render('beauty/index.html.twig', [
            // 'controller_name' => $resp,
        ]);
    }
}

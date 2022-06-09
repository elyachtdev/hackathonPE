<?php

namespace App\Repository;

use App\Entity\Keyword;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Keyword>
 *
 * @method Keyword|null find($id, $lockMode = null, $lockVersion = null)
 * @method Keyword|null findOneBy(array $criteria, array $orderBy = null)
 * @method Keyword[]    findAll()
 * @method Keyword[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class KeywordRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Keyword::class);
    }

    /**
     * @return Keyword[]
     */
<<<<<<< Updated upstream

    public function findKeyword(): array
=======
    public function findSearchCount(): array
>>>>>>> Stashed changes
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery(
<<<<<<< Updated upstream
            'SELECT k FROM App\Entity\Keyword k 
            -- INNER JOIN App\Entity\Website w ON r.website_id = w.id
            -- INNER JOIN App\Entity\Keyword k ON k.id = r.keyword_id 
=======
            'SELECT k FROM App\Entity\Keyword k
            -- INNER JOIN App\Entity\Website w WITH r.websiteId = w.id
            -- INNER JOIN App\Entity\Keyword k WITH k.id = r.keywordId 
>>>>>>> Stashed changes
            WHERE k.monthlySearchCount > 50000
            ORDER BY k.monthlySearchCount DESC'
        );

<<<<<<< Updated upstream
        // returns an array of RankedPage objects
        return $query->getResult();

       // returns an array of RankedPage objects
=======
        // returns an array of Keyword objects
        return $query->getResult();
>>>>>>> Stashed changes
    }

    public function add(Keyword $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Keyword $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Keyword[] Returns an array of Keyword objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('k')
//            ->andWhere('k.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('k.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Keyword
//    {
//        return $this->createQueryBuilder('k')
//            ->andWhere('k.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}

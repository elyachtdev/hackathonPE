<?php

namespace App\Repository;

use App\Entity\RankedPage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<RankedPage>
 *
 * @method RankedPage|null find($id, $lockMode = null, $lockVersion = null)
 * @method RankedPage|null findOneBy(array $criteria, array $orderBy = null)
 * @method RankedPage[]    findAll()
 * @method RankedPage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RankedPageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RankedPage::class);
    }

    /**
     * @return RankedPage[]
     */
    public function findSearchRanking(): array
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery(
            'SELECT r FROM App\Entity\RankedPage r 
            -- INNER JOIN App\Entity\Website w ON r.website_id = w.id
            -- INNER JOIN App\Entity\Keyword k ON k.id = r.keyword_id 
            WHERE r.visibilityScore > 50000
            ORDER BY r.visibilityScore DESC'
        );

        // returns an array of RankedPage objects
        return $query->getResult();
    }

    public function add(RankedPage $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(RankedPage $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return RankedPage[] Returns an array of RankedPage objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('r.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?RankedPage
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}

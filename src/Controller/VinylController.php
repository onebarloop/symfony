<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class VinylController
{

    #[Route('/')]
    public function homepage(): Response {

        return new Response('<h1>Hello Jetbrains!</h1>');

    }
}
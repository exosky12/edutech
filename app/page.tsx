"use client";
import Image from "next/image";
import Link from "next/link";
import useWindowDimensions from "./hooks/useWindowDimensions";

export default function Home() {
  const { width } = useWindowDimensions();

  return (
    <div className="z-10 mt-36 flex h-full w-full flex-col items-center sm:mt-52 md:mt-32">
      <Link
        target="_blank"
        href={"https://github.com/exosky12"}
        className="cursor-pointer flex items-center mb-8 md:mb-0 bg-[#41403E] rounded-full py-1 px-4 sm:py-2 border uppercase"
      >
        <span className="font-medium text-[12px] sm:text-[16px]">
          Créé par un élève pour les élèves
        </span>
      </Link>
      <div>
        <h1 className="text-center font-bold max-w-[320px] text-[30px] sm:text-[42px] sm:max-w-full md:text-[52px] lg:text-[62px] xl:text-[82px]">
          <span className="text-[#1D4ED8] font-black">Simplifiez</span> votre
          aprentissage, <br />
          <span className="text-[#1D4ED8] font-black">dépassez</span> vos
          limites.
        </h1>
        {width! < 1280 && width! > 1024 ? (
          <>
            <Image
              className="relative bottom-[110px]"
              src="/trait1.png"
              width={300}
              height={24}
              alt="Picture of the author"
            />
            <Image
              className="relative bottom-[40px] left-[130px]"
              src="/trait2.png"
              width={260}
              height={24}
              alt="Picture of the author"
            />
          </>
        ) : width! < 1024 && width! > 768 ? (
          <>
            <Image
              className="relative bottom-[90px]"
              src="/trait1.png"
              width={254}
              height={24}
              alt="Picture of the author"
            />
            <Image
              className="relative bottom-[30px] left-[100px]"
              src="/trait2.png"
              width={235}
              height={24}
              alt="Picture of the author"
            />
          </>
        ) : width! < 768 && width! > 640 ? (
          <>
            <Image
              className="relative right-1 bottom-[75px]"
              src="/trait1.png"
              width={204}
              height={24}
              alt="Picture of the author"
            />
            <Image
              className="relative bottom-[25px] left-[80px]"
              src="/trait2.png"
              width={185}
              height={24}
              alt="Picture of the author"
            />
          </>
        ) : width! < 640 && width! > 350 ? (
          <>
            <Image
              className="relative bottom-[95px] left-[45px]"
              src="/trait1.png"
              width={144}
              height={24}
              alt="Picture of the author"
            />
            <Image
              className="relative bottom-[15px] left-[8px]"
              src="/trait2.png"
              width={140}
              height={24}
              alt="Picture of the author"
            />
          </>
        ) : width! < 350 ? (
          <>
            <Image
              className="relative hidden bottom-[95px] left-[45px]"
              src="/trait1.png"
              width={144}
              height={24}
              alt="Picture of the author"
            />
            <Image
              className="relative hidden bottom-[15px] left-[8px]"
              src="/trait2.png"
              width={140}
              height={24}
              alt="Picture of the author"
            />
          </>
        ) : width! > 1280 ? (
          <>
            <Image
              className="relative bottom-[140px]"
              src="/trait1.png"
              width={380}
              height={24}
              alt="Picture of the author"
            />
            <Image
              className="relative bottom-[45px] left-[160px]"
              src="/trait2.png"
              width={360}
              height={24}
              alt="Picture of the author"
            />
          </>
        ) : (
          <></>
        )}
      </div>
      <div
        className={
          "borderBtn cursor-pointer flex items-center mt-4 md:mt-0 bg-white rounded-full px-4 py-2 gap-2"
        }
      >
        <Image
          src="/rocket.svg"
          width={24}
          height={24}
          alt="Picture of the author"
        />
        <Link
          className="font-medium text-black text-[16px] sm:text-[18px]"
          href="/apprentissage"
        >
          Commencer l&apos;apprentissage
        </Link>
      </div>
      <div className="mt-16 max-w-[95%] md:mt-10 lg:max-w-[85%]">
        <Image
          className="w-full"
          src="/landingExample.png"
          width={1138}
          height={890}
          alt="Picture of the author"
        />
      </div>
      <Image
        className="absolute mt-32 z-[-1]"
        src="/blur.png"
        width={2459}
        height={915}
        alt="Picture of the author"
      />
      <div className="flex flex-col 2md:flex-row items-center justify-center mt-[382px]">
        <div className="w-5/6 2md:w-5/12 xl:w-4/6">
          {width! >= 1100 ? (
            <Image
              src="/landingExample2.png"
              width={700}
              height={500}
              alt="Picture of the author"
            />
          ) : width! >= 900 && width! < 1100 ? (
            <Image
              src="/landingExample2.png"
              width={500}
              height={400}
              alt="Picture of the author"
            />
          ) : width! < 900 && width! > 200 ? (
            <Image
              src="/landingExample2Large.png"
              width={1200}
              height={800}
              alt="Picture of the author"
            />
          ) : (
            <></>
          )}
        </div>
        <ul className="flex w-[450px] mt-12 2md:mt-0 2md:w-[350px] flex-col gap-[24px]">
          <div className="flex items-center gap-2">
            <Image
              src="/plus.png"
              width={32}
              height={32}
              alt="Picture of the author"
            />
            <li className="font-normal text-[20px]">
              Devenez plus efficace dans vos révisions
            </li>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/trending.png"
              width={32}
              height={32}
              alt="Picture of the author"
            />
            <li className="font-normal text-[20px]">Augmentez vos résultats</li>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/note.png"
              width={32}
              height={32}
              alt="Picture of the author"
            />
            <li className="font-normal text-[20px]">
              Faites vos propres fiches en moins de 5 minutes
            </li>
          </div>
        </ul>
      </div>
      <div className="flex w-4/6 flex-col items-center gap-8 mt-[382px]">
        <div>
          <h2 className="text-center font-bold text-[52px]">
            Ne perdez plus{" "}
            <span className="text-[#1D4ED8] font-black">une minute</span> dans
            vos révisions
          </h2>
          <Image
            className="relative bottom-3 left-[370px]"
            src="/trait3.png"
            width={274}
            height={24}
            alt="Picture of the author"
          />
        </div>
        <p className="w-5/6 text-center font-normal text-[20px]">
          En tant qu’élève je sais ce que c’est de passer des heures et des
          heures à{" "}
          <span className="text-[#1D4ED8] font-bold">
            faire des fiches de révisions
          </span>
          , il faut regrouper les différents{" "}
          <span className="text-[#1D4ED8] font-bold">cours</span>,{" "}
          <span className="text-[#1D4ED8] font-bold">exercices</span> et{" "}
          <span className="text-[#1D4ED8] font-bold">méthodes</span> qui sont
          souvent pas centralisés au même endroit <br />
          <br />
          C’est pour ça que j’ai créé{" "}
          <span className="font-bold">
            Edu<span className="text-[#1D4ED8]">Tech</span>
          </span>
          , tout est{" "}
          <span className="text-[#1D4ED8] font-black">centralisé</span> pour
          vous faire{" "}
          <span className="text-[#1D4ED8] font-black">gagner du temps</span> et{" "}
          <span className="text-[#1D4ED8] font-black">
            apprendre plus efficacement
          </span>
        </p>
      </div>
      <div
        id="apropos"
        className="flex flex-row items-center justify-center mt-[382px]"
      >
        <div className="flex w-2/6 flex-col gap-8">
          <h2 className="font-normal leading-tight text-[48px]">
            <span className="text-[#1D4ED8] font-bold">Annotez vos cours</span>{" "}
            avec la même simplicité que sur une feuille
          </h2>
          <Image
            className="relative bottom-[155px]"
            src="/trait4.png"
            width={414}
            height={24}
            alt="Picture of the author"
          />
          <p className="text-[18px]">
            Je sais à quel point il est pratique de pouvoir{" "}
            <span className="text-[#1D4ED8] font-bold">gribouiller</span>,{" "}
            <span className="text-[#1D4ED8] font-bold">annoter</span>,{" "}
            <span className="text-[#1D4ED8] font-bold">
              rajouter des schémas
            </span>{" "}
            par{" "}
            <span className="text-[#1D4ED8] font-bold">
              un seul coup de crayon
            </span>{" "}
            sur une feuille, c’est pourquoi j’ai intégré une expérience
            d’annotation aussi pratique que si vous étiez sur une feuille
          </p>
        </div>
        <Image
          src="/landingExample3.png"
          width={700}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div
        id="prix"
        className="flex flex-col items-center gap-4 text-center mt-[382px]"
      >
        <div>
          <h2 className="text-[52px]">
            <span className="font-bold">
              Edu<span className="text-[#1D4ED8]">Tech</span>
            </span>{" "}
            est un projet{" "}
            <span className="text-[#1D4ED8] font-bold">100% gratuit!</span>
          </h2>
          <Image
            className="relative bottom-3 left-[520px]"
            src="/trait5.png"
            width={314}
            height={24}
            alt="Picture of the author"
          />
          <span className="font-light text-[22px]">(pour le moment)</span>
        </div>
        <p className="w-4/6 text-[18px]">
          En effet, pour le moment vous pouvez profiter du projet{" "}
          <span className="text-[#1D4ED8] font-bold">100% gratuitement</span> !{" "}
          <span className="text-[#1D4ED8] font-bold">Aucun prix</span>,{" "}
          <span className="text-[#1D4ED8] font-bold">aucun abonnement</span>,{" "}
          <span className="text-[#1D4ED8] font-bold">aucune restriction</span>{" "}
          quand au nombre de cours
          <br />
          Dans le futur le projet pourrait s’appuyer sur le principe du Freemium
        </p>
      </div>
      <div className="flex flex-row items-center justify-center mt-[222px] align-center">
        <div className="w-2/6 items-center">
          <h2 className="font-normal text-[52px]">
            Créateur d’
            <span className="font-bold">
              Edu<span className="text-[#1D4ED8]">Tech</span>
            </span>
          </h2>
          <span className="font-light text-[18px]">
            Merienne Jules (Exosky12), apprenti développeur et designer{" "}
          </span>{" "}
          <br /> <br />
          <p>
            J’ai 17 ans, ça fait 1 an que je conçois des applications web et 3
            ans que j’en développe. Actuellement en terminale, j’aimerais faire
            des études d’ingénieur informatique. <br />
            Je suis{" "}
            <span className="text-[#1D4ED8] font-bold">
              le développeur et le designer de ce projet.
            </span>
          </p>{" "}
          <br /> Ayant toujours eu des facilités à l’école, je n’ai jamais
          vraiment travaillé, j’ai donc eu du mal à trouver une{" "}
          <span className="text-[#1D4ED8] font-bold">stratégie</span> et une{" "}
          <span className="text-[#1D4ED8] font-bold">méthode de travail</span>{" "}
          adaptées à{" "}
          <span className="text-[#1D4ED8] font-bold">mes besoins</span>. Je
          trouvais trop compliqué le fait de chercher dans différentes pages de
          différents cahiers pour essayer de faire une{" "}
          <span className="text-[#1D4ED8] font-bold">
            fiche de révision complète.
          </span>
          <br />
          C’est donc comme ça qu’est née l’idée d’{" "}
          <span className="font-bold">
            Edu<span className="text-[#1D4ED8]">Tech.</span>
          </span>
        </div>
        <div>
          <Image
            src="/whoami.png"
            width={550}
            height={536}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="flex w-10/12 flex-col items-center justify-center gap-12 text-center min-h-[377px] banner mt-[282px]">
        <h2 className="w-2/4 font-normal text-[42px]">
          Vous voulez{" "}
          <span className="text-[#1D4ED8] font-bold">simplifier</span> votre
          apprentissage et{" "}
          <span className="text-[#1D4ED8] font-bold">dépasser</span> vos limites
          ?
        </h2>
        <div
          className={
            "borderBtn cursor-pointer flex items-center bg-white rounded-full px-4 py-2 gap-2"
          }
        >
          <Image
            src="/rocket.svg"
            width={24}
            height={24}
            alt="Picture of the author"
          />
          <Link
            className="font-medium text-black text-[18px]"
            href="/apprentissage"
          >
            Commencer l&apos;apprentissage
          </Link>
        </div>
      </div>
    </div>
  );
}

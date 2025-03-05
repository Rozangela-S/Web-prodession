import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";

const reviews = [
  {
    name: "Acelerando a Inovação",
    body: "A tecnologia está transformando a maneira como trabalhamos, desde a automação de tarefas repetitivas até a criação de novos campos de atuação. Prepare-se para um futuro em que a inovação é a chave do sucesso.",
    img: "AC.png",
    username: "",
  },
  {
    name: "Transformação Digital",
    body: "Com o avanço das ferramentas digitais, profissões estão se adaptando e novas carreiras estão surgindo. As tecnologias emergentes estão redefinindo o que significa ser um profissional no século XXI.",
    img: "TD.png",
    username: "",

  },
  {
    name: "A Revolução da Inteligência Artificial",
    body: "A inteligência artificial está moldando o futuro do trabalho, criando oportunidades em áreas como automação, saúde, e segurança cibernética, enquanto desafia as habilidades tradicionais.",
    img: "IA.png",
    username: "",

  },
  {
    name: "Convergência de Disciplinas",
    body:"A tecnologia está unindo diferentes campos, como biotecnologia, inteligência artificial e sustentabilidade, abrindo portas para profissões híbridas que antes pareciam impossíveis.",
    img: "CV.png",
    username: "",

  },
  {
    name: "Trabalho Remoto e Flexibilidade",
    body: "A digitalização dos ambientes de trabalho está mudando a forma como interagimos com o mercado de trabalho, permitindo mais flexibilidade e novas formas de colaboração, onde quer que você esteja.",
    img: "TR.png",
    username: "",

  },
  {
    name: "Tecnologia e Sustentabilidade",
    body:  "Tecnologias inovadoras estão ajudando a criar um futuro mais sustentável, com novas oportunidades em áreas como energias renováveis, economia circular e gestão ambiental. O futuro do trabalho será tão verde quanto tecnológico.",
    img: "TS.png",
    username: "",

  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-full  cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row  items-center gap-2">
        <img className="rounded-full" width="60" height="50" alt="" src={img} />
        <div className="flex  flex-col">
          <figcaption className="text-base  font-bold dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2  text-lg">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:5s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:5s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}

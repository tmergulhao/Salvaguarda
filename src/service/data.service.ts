import { Injectable  } from '@angular/core';

@Injectable()
export class DataService{
	dicas(){
		return [
			{
                title: "Maus tratos à animais",
                body: "Para situações de maus-tratos aos animais e crimes ambientais em geral, o Ibama esta disponível para te ajudar.",
                callToAction: "Chamar ao Ibama 0800-618080",
                icon: "./../assets/dicas-tabela/cachorro-tabela.png"
            },
            {
                title: "Abuso de autoridade",
                body: "Para situações de danos abuso de autoridade é aconselhado ligar no 127, Ministério Público.",
                callToAction: "Chamar o Ministério Público 127",
                icon: "./../assets/dicas-tabela/autoridade-tabela.png"
            },
            {
                title: "Amparo às minorias",
                body: "Para o serviço de atendimento de denúncias de violação dos direitos humanos, como preconceito e violencia contra idosos e crianças, população LGBT e pessoas com necessidades especiais ligue para 100.",
                callToAction: "Ouvidoria de Direitos Humanos",
                icon: "./../assets/dicas-tabela/minorias-tabela.png"
            },
            {
                title: "Proteção à mulher",
                body: "Para mais informação sobre direitos, ajuda psicológica e locais de amparo à mulheres em situação de risco ligue para a Central de Atendimento à Mulher.",
                callToAction: "Chamar ao Central 180",
                icon: "./../assets/dicas-tabela/mulher-tabela.png"
            },
            {
                title: "Danos à propriedade pública",
                body: "Para situações de danos ao patrimônio público e ao meio ambiente é aconselhado ligar no 127, Ministério Público.",
                callToAction: "Chamar o Ministério Público 127",
                icon: "./../assets/dicas-tabela/propridade-tabela.png"
            },
            {
                title: "Saúde e primeiros socorros",
                body: "Para o atendimento de urgências médicas e orientações em geral sobre como prosseguir em casos de emergência é aconselhado ligar para o Serviço de Atendimento Móvel, o SAMU.",
                callToAction: "Chamar o SAMU 192",
                icon: "./../assets/dicas-tabela/saude-tabela.png"
            },
            {
                title: "Perturbação",
                body: "Sempre que possível e seguro é indicado que conflitos sejam resolvidos sem o involvimento do estado. No entanto, em outros casos é aconselhado que sejam informadas as autoridades com o objetivo de evitar confronto entre cidadãos. Ligar para a AGEFIS é sempre uma boa opção no caso de perturbação da paz pública; o telefone é 3961-5126.",
                callToAction: "Chamar a AGEFIS 3961-5126",
                icon: "./../assets/dicas-tabela/som-tabela.png"
            },
		];
	}
	perguntas () {
		return [
			{
				body: "Você já viu algum acidente de transito nesta área?",
				tags: ["transito"]
			},
			{
				body: "Na sua opinião, as ruas desta região estão em boa condição?",
				tags: ["transito"]
			},
			{
				body: "Os motoristas param na faixa de pedestre por aqui?",
				tags: ["transito"]
			},
			{
				body: "Você ouve muitas buzinadas nesta área?",
				tags: ["transito"]
			},
			{
				body: "Há muitas escolas nesta região?",
				tags: ["transito"]
			},
			{
				body: "Há muitos bares nessa região?",
				tags: ["transito"]
			},
			{
				body: "Fica muito congestionado no horário de pico por aqui?",
				tags: ["transito"]
			},
			{
				body: "Você acha que é difícil dormir aqui por causa de barulho?",
				tags: ["perturbacao"]
			},
			{
				body: "Acontecem muitos eventos ou festas por aqui?",
				tags: ["perturbacao"]
			},
			{
				body: "Nesta área existem muitos bares?",
				tags: ["perturbacao"]
			},
			{
				body: "Tem alguma instituição de ensino superior nesta área?",
				tags: ["perturbacao"]
			},
			{
				body: "Você se sentiria seguro fazendo uma denúncia de desordem pública nesta área?",
				tags: ["perturbacao"]
			},
			{
				body: "Você já presenciou alguma briga por aqui?",
				tags: ["ofensas"]
			},
			{
				body: "Você já se sentiu constrangido ou ofendido por um entranho por aqui?",
				tags: ["ofensas"]
			},
			{
				body: "As pessoas desta região são amigáveis com estranhos?",
				tags: ["ofensas"]
			},
			{
				body: "Você já presenciou algum destrato ou insulto nesta região?",
				tags: ["ofensas"]
			},
			{
				body: "Você já sofreu ou presenciou assédio moral aqui?",
				tags: ["ofensas"]
			},
			{
				body: "Você já presenciou preconceito racial nesta área?",
				tags: ["inclusao"]
			},
			{
				body: "Você acha que os ambientes aqui são inclusivos à minorias?",
				tags: ["inclusao"]
			},
			{
				body: "Você acha que alguém estaria seguro em expressar suas crenças e identidade neste local?",
				tags: ["inclusao"]
			},
			{
				body: "Você já foi furtado nesta região?",
				tags: ["furtos"]
			},
			{
				body: "É seguro atender o telefone por aqui?",
				tags: ["furtos"]
			},
			{
				body: "Você acha que é provável ser furtado por aqui?",
				tags: ["furtos"]
			},
			{
				body: "Você já sofreu algum golpe por aqui?",
				tags: ["furtos"]
			},
			{
				body: "Você já viu alguém cometer um furto por aqui?",
				tags: ["furtos"]
			},
			{
				body: "Você já ouviu falar de um furto que aconteceu por aqui?",
				tags: ["furtos"]
			},
			{
				body: "Você acha que conseguiria reaver seus bens se os perdesse por aqui?",
				tags: ["furtos"]
			},
			{
				body: "Você diria que os cachorros latem excessivamente por aqui?",
				tags: ["animais"]
			},
			{
				body: "Existem animais abandonados nesta região?",
				tags: ["animais"]
			},
			{
				body: "Você suspeita que algum animal esteja sofrendo maus-tratros por aqui?",
				tags: ["animais"]
			},
			{
				body: "Você já presenciou o atropelamento de algum animal por aqui?",
				tags: ["animais"]
			},
			{
				body: "Você já sofreu alguma ameaça nesta região?",
				tags: ["ameacas"]
			},
			{
				body: "Você conhece algum caso recente de alguém que foi ameaçado por aqui?",
				tags: ["ameacas"]
			},
			{
				body: "Você sabe o que fazer/quem contatar caso receba algum tipo de ameaça?",
				tags: ["ameacas"]
			},
		]
	}
    salvos(){
        return [
            {
                nomeCidade: "Lago Norte",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-lago-norte.png"
            },
            {
                nomeCidade: "Brasília",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-brasilia.png"
            },
            {
                nomeCidade: "Sudoeste",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-sudoeste.png"
            },
            {
                nomeCidade: "Cruzeiro",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-cruzeiro.png"
            },
            {
                nomeCidade: "SIA",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-sia.png"
            },
            {
                nomeCidade: "Varjão",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-varjao.png"
            },
            {
                nomeCidade: "Estrutural",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-estrutural.png"
            },
            {
                nomeCidade: "Sobradinho",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-sobradinho.png"
            },
            {
                nomeCidade: "Paranoá",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-paranoa.png"
            },
            {
                nomeCidade: "Planaltina",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-planaltina.png"
            },
            {
                nomeCidade: "Itapoã",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-itapoa.png"
            },
            {
                nomeCidade: "Fercal",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-fercal.png"
            },
            {
                nomeCidade: "Brazlândia",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-brazlandia.png"
            },
            {
                nomeCidade: "São Sebastião",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-sao-sebastiao.png"
            },
            {
                nomeCidade: "Santa Maria",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-santa-maria.png"
            },
            {
                nomeCidade: "Lago Sul",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-lago-sul.png"
            },
            {
                nomeCidade: "Jardim Botânico",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-jardim-botanico.png"
            },
            {
                nomeCidade: "Gama",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-gama.png"
            },
            {
                nomeCidade: "Ceilândia",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-ceilandia.png"
            },
            {
                nomeCidade: "Samambaia",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-samambaia.png"
            },
            {
                nomeCidade: "Taguatinga",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-taguatinga.png"
            },
            {
                nomeCidade: "Recanto das Emas",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-recanto-das-emas.png"
            },
            {
                nomeCidade: "Park Way",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-park-way.png"
            },
            {
                nomeCidade: "Águas Claras",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-aguas-claras.png"
            },
            {
                nomeCidade: "Riacho Fundo",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-riacho-fundo.png"
            },
            {
                nomeCidade: "Riacho Fundo 2",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-riacho-fundo-2.png"
            },
            {
                nomeCidade: "Guará",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-guara.png"
            },
            {
                nomeCidade: "Vicente Pires",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-vicente-pires.png"
            },
            {
                nomeCidade: "Candangolândia",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-candangolandia.png"
            },
            {
                nomeCidade: "Núcleo Bandeirante",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-nucleo-bandeirante.png"
            }
        ];
    }

    dadosPoliciais(){
        return [
            {
                icone: "car",
                descricao: "Acidentes Automotivos",
                porcentagem: 45
            },
             {
                icone: "md-volume-mute",
                descricao: "Perturbação",
                porcentagem: 30
            },
             {
                icone: "",
                descricao: "Maus tratos aos animais",
                porcentagem: 20
            },
             {
                icone: "",
                descricao: "Furtos",
                porcentagem: 80
            }
        ];
    }
}
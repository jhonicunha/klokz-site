import React from 'react';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Klokz',
  description: 'Política de Privacidade do sistema de gestão Klokz para bares, baladas e eventos.',
};

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar backOnly={true} />
      <main className="flex-1 pt-32 pb-20 relative">
        {/* Glow effect similar to hero */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-[#10A7F1]/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
        
        <Container>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="bg-[#0D0D0D] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Subtle top border gradient */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#10A7F1] to-transparent opacity-50" />
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">Política de Privacidade</h1>
              
              <div className="space-y-8 text-gray-300 leading-relaxed text-[15px] md:text-[16px]">
                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">1. Introdução</h2>
                  <p>
                    A KLOKZ SISTEMAS LTDA ("Klokz", "nós", "nosso") valoriza a privacidade e a segurança das informações de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos os dados pessoais e informações de negócios quando você utiliza nosso site e sistema de gestão para bares, baladas e eventos.
                  </p>
                  <p className="mt-4">
                    Ao acessar ou utilizar nossos serviços, você concorda com as práticas descritas nesta Política. Se você não concordar com algum aspecto, não deve utilizar nossos serviços.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">2. Dados que Coletamos</h2>
                  <p>Podemos coletar os seguintes tipos de informações:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li><strong>Dados de Cadastro e Contato:</strong> Nome, e-mail, telefone, cargo, nome da empresa e CNPJ fornecidos durante o preenchimento de formulários ou contato via WhatsApp.</li>
                    <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo gasto no site e outras informações de diagnóstico coletadas automaticamente através de cookies e tecnologias semelhantes (como Google Analytics e Meta Pixel).</li>
                    <li><strong>Dados do Sistema (Clientes):</strong> Para os clientes que utilizam nosso sistema de gestão, processamos dados inseridos na plataforma referentes às suas operações comerciais, como fluxo de caixa, estoque e informações de consumidores finais (ex: listas VIP e comandas), atuando nós como operadores de dados nesses casos.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">3. Como Usamos Seus Dados</h2>
                  <p>As informações coletadas são utilizadas para:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Fornecer, operar e manter nosso site e sistema.</li>
                    <li>Melhorar, personalizar e expandir nossos serviços, analisando como você interage com eles.</li>
                    <li>Entrar em contato com você para suporte técnico, atendimento de vendas, envio de atualizações, newsletters e outras informações promocionais (que você pode optar por não receber).</li>
                    <li>Processar transações e gerenciar a infraestrutura técnica (como integrações com Stone e Getnet).</li>
                    <li>Cumprir obrigações legais e regulatórias.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">4. Compartilhamento de Dados</h2>
                  <p>
                    Nós não vendemos seus dados pessoais. Podemos compartilhar informações com:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li><strong>Provedores de Serviços:</strong> Empresas terceirizadas que nos auxiliam na operação do site, processamento de pagamentos, hospedagem em nuvem e análise de dados, sob obrigações estritas de confidencialidade.</li>
                    <li><strong>Obrigações Legais:</strong> Quando exigido por lei, ordem judicial ou para proteger nossos direitos e a segurança de nossos usuários e do público.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">5. Segurança dos Dados</h2>
                  <p>
                    Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Nosso sistema utiliza criptografia e protocolos de segurança padrão do mercado para garantir a integridade das suas informações e das operações do seu estabelecimento.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">6. Seus Direitos (LGPD)</h2>
                  <p>
                    De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de solicitar:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Confirmação da existência de tratamento de dados.</li>
                    <li>Acesso aos seus dados.</li>
                    <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                    <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</li>
                    <li>Portabilidade dos dados a outro fornecedor de serviço ou produto.</li>
                    <li>Revogação do consentimento.</li>
                  </ul>
                  <p className="mt-4">
                    Para exercer seus direitos, entre em contato conosco através do e-mail abaixo.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">7. Retenção de Dados</h2>
                  <p>
                    Manteremos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletadas, incluindo a satisfação de quaisquer requisitos legais, contábeis ou de relatórios.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">8. Alterações a esta Política</h2>
                  <p>
                    Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações significativas publicando a nova política nesta página e, se aplicável, por meio de comunicação direta. Recomendamos que você revise esta página regularmente.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">9. Contato</h2>
                  <p>
                    Se você tiver dúvidas, comentários ou solicitações relacionadas a esta Política de Privacidade, entre em contato conosco:
                  </p>
                  <div className="mt-6 p-6 bg-white/5 rounded-xl border border-white/10 flex flex-col gap-2">
                    <p className="font-semibold text-white">KLOKZ SISTEMAS LTDA</p>
                    <p>E-mail: <a href="mailto:admin@klokz.com.br" className="text-[#10A7F1] hover:text-white transition-colors">admin@klokz.com.br</a></p>
                    <p>Telefone / WhatsApp: <a href="https://wa.me/5541999988288" target="_blank" rel="noopener noreferrer" className="text-[#10A7F1] hover:text-white transition-colors">(41) 99998-8288</a></p>
                  </div>
                </section>
              </div>
              
              <div className="mt-12 pt-6 border-t border-white/10 text-[13px] text-gray-500 font-medium">
                Última atualização: {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

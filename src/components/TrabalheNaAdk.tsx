import React, { FormEvent, useRef, useState } from "react";
import {
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Loader2,
  Mail,
  Phone,
  Upload,
  User,
} from "lucide-react";

const API_URL =
  "https://sothink.com.br/apiredeadk/trabalhe/inserir";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const TrabalheNaAdk: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [curriculo, setCurriculo] = useState<File | null>(null);

  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState("");

  const handleFile = (file: File | null) => {
    setErro("");

    if (!file) {
      setCurriculo(null);
      return;
    }

    const extensao = file.name
      .split(".")
      .pop()
      ?.toLowerCase();

    if (!["pdf", "doc", "docx"].includes(extensao || "")) {
      setCurriculo(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setErro(
        "Envie o currículo em PDF, DOC ou DOCX."
      );

      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setCurriculo(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setErro(
        "O currículo deve ter no máximo 5 MB."
      );

      return;
    }

    setCurriculo(file);
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setErro("");
    setSucesso(false);

    if (
      !nome.trim() ||
      !email.trim() ||
      !whatsapp.trim() ||
      !curriculo
    ) {
      setErro(
        "Preencha todos os campos e anexe seu currículo."
      );

      return;
    }

    const dados = new FormData();

    dados.append("nome", nome.trim());
    dados.append("email", email.trim());
    dados.append("whatsapp", whatsapp.trim());
    dados.append("curriculo", curriculo);

    setEnviando(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: dados,
        headers: {
          Accept: "application/json",
        },
      });

      const texto = await response.text();

      let resultado: {
        success?: boolean;
        msg?: string;
      };

      try {
        resultado = JSON.parse(texto);
      } catch {
        console.error(
          "Resposta recebida do servidor:",
          texto
        );

        throw new Error(
          "O servidor não retornou uma resposta JSON válida."
        );
      }

      if (!response.ok || !resultado.success) {
        throw new Error(
          resultado.msg ||
            "Não foi possível enviar sua candidatura."
        );
      }

      setSucesso(true);
      setNome("");
      setEmail("");
      setWhatsapp("");
      setCurriculo(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error(error);

      setErro(
        error instanceof Error
          ? error.message
          : "Erro ao enviar sua candidatura."
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section
      className="min-h-[calc(100vh-90px)] bg-adk-dark py-16 md:py-24 px-4"
      id="trabalhe-na-adk"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 border border-adk-yellow/40 bg-adk-yellow/10 text-adk-yellow px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-5">
            <BriefcaseBusiness className="w-3.5 h-3.5" />
            Faça parte da equipe
          </div>

          <h2 className="font-black uppercase text-white text-4xl md:text-6xl tracking-tight leading-[0.95]">
            Quero trabalhar
            <span className="text-adk-yellow">
              {" "}
              na ADK
            </span>
          </h2>

          <p className="mt-5 text-zinc-400 max-w-2xl text-sm md:text-base leading-relaxed">
            Preencha seus dados e envie seu currículo.
            Nossa equipe receberá sua candidatura para
            avaliação.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-7 h-fit">
            <h3 className="text-white uppercase font-black tracking-tight text-lg">
              Trabalhe conosco
            </h3>

            <p className="text-zinc-500 text-sm leading-relaxed mt-3">
              Buscamos profissionais comprometidos com
              excelência, esporte e desenvolvimento.
            </p>

            <div className="mt-7 pt-7 border-t border-zinc-800 space-y-4">
              <div className="flex gap-3">
                <FileText className="w-5 h-5 text-adk-yellow shrink-0" />

                <div>
                  <strong className="block text-white text-xs uppercase">
                    Currículo
                  </strong>

                  <span className="text-zinc-500 text-xs">
                    PDF, DOC ou DOCX
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <Upload className="w-5 h-5 text-adk-yellow shrink-0" />

                <div>
                  <strong className="block text-white text-xs uppercase">
                    Tamanho máximo
                  </strong>

                  <span className="text-zinc-500 text-xs">
                    5 MB
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-adk-card border border-zinc-800 rounded-2xl p-6 md:p-8">
            {sucesso ? (
              <div className="min-h-[420px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-adk-yellow/15 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-adk-yellow" />
                </div>

                <h3 className="text-white font-black uppercase text-2xl">
                  Currículo enviado!
                </h3>

                <p className="text-zinc-400 text-sm max-w-md mt-3">
                  Sua candidatura foi recebida com sucesso
                  pela ADK Tennis.
                </p>

                <button
                  type="button"
                  onClick={() => setSucesso(false)}
                  className="mt-7 bg-adk-yellow hover:bg-white text-zinc-950 font-black uppercase tracking-widest text-xs px-6 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Enviar outro currículo
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="trabalhe-nome"
                    className="block text-[11px] font-black uppercase tracking-widest text-zinc-300 mb-2"
                  >
                    Nome
                  </label>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />

                    <input
                      id="trabalhe-nome"
                      type="text"
                      value={nome}
                      onChange={(e) =>
                        setNome(e.target.value)
                      }
                      required
                      maxLength={150}
                      placeholder="Seu nome completo"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-adk-yellow outline-none rounded-lg pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-zinc-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="trabalhe-email"
                      className="block text-[11px] font-black uppercase tracking-widest text-zinc-300 mb-2"
                    >
                      E-mail
                    </label>

                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />

                      <input
                        id="trabalhe-email"
                        type="email"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        required
                        maxLength={180}
                        placeholder="voce@email.com"
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-adk-yellow outline-none rounded-lg pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-zinc-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="trabalhe-whatsapp"
                      className="block text-[11px] font-black uppercase tracking-widest text-zinc-300 mb-2"
                    >
                      WhatsApp
                    </label>

                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />

                      <input
                        id="trabalhe-whatsapp"
                        type="tel"
                        value={whatsapp}
                        onChange={(e) =>
                          setWhatsapp(e.target.value)
                        }
                        required
                        maxLength={30}
                        autoComplete="tel"
                        placeholder="(47) 99999-9999"
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-adk-yellow outline-none rounded-lg pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-zinc-600 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="trabalhe-curriculo"
                    className="block text-[11px] font-black uppercase tracking-widest text-zinc-300 mb-2"
                  >
                    Upload currículo
                  </label>

                  <label
                    htmlFor="trabalhe-curriculo"
                    className="group flex flex-col items-center justify-center min-h-[150px] border border-dashed border-zinc-700 hover:border-adk-yellow bg-zinc-950 rounded-xl cursor-pointer transition-colors px-5 text-center"
                  >
                    <Upload className="w-7 h-7 text-adk-yellow mb-3" />

                    {curriculo ? (
                      <>
                        <strong className="text-white text-sm break-all">
                          {curriculo.name}
                        </strong>

                        <span className="text-zinc-500 text-xs mt-1">
                          {(
                            curriculo.size /
                            1024 /
                            1024
                          ).toFixed(2)}{" "}
                          MB
                        </span>
                      </>
                    ) : (
                      <>
                        <strong className="text-white text-sm">
                          Clique para selecionar seu
                          currículo
                        </strong>

                        <span className="text-zinc-500 text-xs mt-1">
                          PDF, DOC ou DOCX • máximo 5 MB
                        </span>
                      </>
                    )}

                    <input
                      ref={fileInputRef}
                      id="trabalhe-curriculo"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={(e) =>
                        handleFile(
                          e.target.files?.[0] || null
                        )
                      }
                      required
                      className="hidden"
                    />
                  </label>
                </div>

                {erro && (
                  <div className="border border-red-500/30 bg-red-500/10 text-red-300 px-4 py-3 rounded-lg text-sm">
                    {erro}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full bg-adk-yellow hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed text-zinc-950 font-black uppercase tracking-[0.16em] text-xs px-5 py-4 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  {enviando ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando currículo...
                    </>
                  ) : (
                    <>
                      <BriefcaseBusiness className="w-4 h-4" />
                      Enviar candidatura
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

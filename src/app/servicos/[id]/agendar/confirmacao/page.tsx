export default function ConfirmacaoAgendamento() {
  return (
    <div style={{
      maxWidth: 700,
      minWidth: 350,
      margin: '60px auto',
      padding: 40,
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 4px 24px #0002',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: 32, marginBottom: 24, color: '#22c55e' }}>Agendamento realizado com sucesso!</h2>
      <p style={{ fontSize: 20, marginBottom: 24 }}>
        Obrigado por agendar conosco.<br />
        Em breve entraremos em contato para confirmar os detalhes do seu atendimento.
      </p>
      <a href="/servicos" style={{
        display: 'inline-block',
        marginTop: 20,
        padding: '12px 32px',
        background: '#fbbf24',
        color: '#222',
        borderRadius: 8,
        fontWeight: 'bold',
        fontSize: 18,
        textDecoration: 'none'
      }}>
        Voltar para Serviços
      </a>
    </div>
  );
} 
import React from 'react'

const Contact = () => {
  const formInitialDetails = {
    firstName: "", lastName: "", email: "", phone: "", message: ""
  }

  const [formDetails, setFormDetails] = React.useState(formInitialDetails)
  const [buttonText, setButtonText] = React.useState("Send message")
  const [status, setStatus] = React.useState({})

  function onFormUpdate(field, value) {
    setFormDetails(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setButtonText("Sending...")
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(formDetails),
      })
      const result = await response.json()
      setFormDetails(formInitialDetails)
      setStatus(result.code === 200
        ? { success: true, message: "Message sent successfully!" }
        : { success: false, message: "Something went wrong. Please try again." }
      )
    } catch {
      setStatus({ success: false, message: "Could not connect. Please try again." })
    } finally {
      setButtonText("Send message")
    }
  }

  const s = styles

  return (
    <section style={s.root} id="contact">
      <div style={s.inner}>

        {/* Left — info */}
        <div style={s.left}>
          <p style={s.eyebrow}>Contact</p>
          <h2 style={s.heading}>Let's work<br />together.</h2>
          <p style={s.desc}>
            Have a project in mind or just want to say hello? Fill out the form
            and I'll get back to you within 24 hours.
          </p>

          {[
            { label: "Email",    value: "davidemide.lawal@email.com" },
            { label: "Phone",    value: "+234 904 501 8053" },
            { label: "Location", value: "Lagos, Nigeria" },
          ].map(({ label, value }) => (
            <div key={label} style={s.detail}>
              <div style={s.iconBox} />
              <div>
                <p style={s.detailLabel}>{label}</p>
                <p style={s.detailVal}>{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right — form */}
        <div style={s.card}>
          <div style={s.row}>
            {[["firstName","First name","Ayomide"], ["lastName","Last name","Lawal"]].map(([field, label, ph]) => (
              <div key={field} style={s.field}>
                <label style={s.label}>{label}</label>
                <input style={s.input} type="text" placeholder={ph}
                  value={formDetails[field]}
                  onChange={e => onFormUpdate(field, e.target.value)} />
              </div>
            ))}
          </div>

          {[
            ["email", "Email", "email", "you@example.com"],
            ["phone", "Phone", "tel",   "+234 800 000 0000"],
          ].map(([field, label, type, ph]) => (
            <div key={field} style={s.field}>
              <label style={s.label}>{label}</label>
              <input style={s.input} type={type} placeholder={ph}
                value={formDetails[field]}
                onChange={e => onFormUpdate(field, e.target.value)} />
            </div>
          ))}

          <div style={s.field}>
            <label style={s.label}>Message</label>
            <textarea style={s.textarea} rows={5} placeholder="Tell me about your project..."
              value={formDetails.message}
              onChange={e => onFormUpdate("message", e.target.value)} />
          </div>

          <button style={s.btn} onClick={handleSubmit}>{buttonText}</button>

          {status.message && (
            <p style={{ ...s.statusMsg, color: status.success ? "#3B6D11" : "#A32D2D" }}>
              {status.message}
            </p>
          )}
        </div>

      </div>
    </section>
  )
}

const styles = {
  root:        { fontFamily: "'DM Sans', sans-serif", background: "#F8F6F1", padding: "56px 40px" },
  inner:       { maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" },
  left:        { paddingTop: 8 },
  eyebrow:     { fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9C7C5A", margin: "0 0 16px" },
  heading:     { fontFamily: "'DM Serif Display', serif", fontSize: 38, color: "#1A1714", lineHeight: 1.1, margin: "0 0 20px" },
  desc:        { fontSize: 14, color: "#6B6560", lineHeight: 1.7, margin: "0 0 36px" },
  detail:      { display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 20 },
  iconBox:     { width: 36, height: 36, borderRadius: 8, background: "#EDEAE4", flexShrink: 0 },
  detailLabel: { fontSize: 11, color: "#9A9489", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 2px" },
  detailVal:   { fontSize: 14, color: "#1A1714", margin: 0 },
  card:        { background: "#FFFFFF", border: "1px solid #E2DDD6", borderRadius: 16, padding: 32 },
  row:         { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 },
  field:       { display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 },
  label:       { fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#9A9489" },
  input:       { height: 40, border: "1px solid #E2DDD6", borderRadius: 8, background: "#FAFAF8", padding: "0 14px", fontSize: 14, color: "#1A1714", boxSizing: "border-box", width: "100%", outline: "none", fontFamily: "inherit" },
  textarea:    { border: "1px solid #E2DDD6", borderRadius: 8, background: "#FAFAF8", padding: "12px 14px", fontSize: 14, color: "#1A1714", boxSizing: "border-box", width: "100%", outline: "none", resize: "none", lineHeight: 1.6, fontFamily: "inherit" },
  btn:         { width: "100%", height: 44, borderRadius: 8, border: "none", background: "#1A1714", color: "#F8F6F1", fontSize: 14, fontWeight: 500, cursor: "pointer", marginTop: 4, fontFamily: "inherit" },
  statusMsg:   { fontSize: 13, marginTop: 12, marginBottom: 0 },
}

export default Contact
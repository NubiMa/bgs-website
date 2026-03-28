import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi.' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'BGS Sidoarjo Website <onboarding@resend.dev>',
      to: [process.env.RESEND_TO_EMAIL],
      replyTo: email,
      subject: `Tanggapan dari ${name} — BGS Sidoarjo Website`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; border-radius: 16px; overflow: hidden;">
          <div style="background: #1C1C1C; padding: 32px; text-align: center;">
            <h1 style="color: #D1A71D; font-size: 24px; margin: 0; letter-spacing: -0.5px;">BGS Sidoarjo</h1>
            <p style="color: #9ca3af; font-size: 13px; margin: 8px 0 0;">Pesan Baru dari Website</p>
          </div>
          <div style="padding: 32px; background: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 16px; background: #f8f9fa; border-radius: 8px; margin-bottom: 8px;">
                  <p style="margin: 0; font-size: 11px; color: #9ca3af; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Nama</p>
                  <p style="margin: 4px 0 0; font-size: 15px; color: #111111; font-weight: 600;">${name}</p>
                </td>
              </tr>
              <tr><td style="height: 8px;"></td></tr>
              <tr>
                <td style="padding: 12px 16px; background: #f8f9fa; border-radius: 8px;">
                  <p style="margin: 0; font-size: 11px; color: #9ca3af; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                  <p style="margin: 4px 0 0; font-size: 15px; color: #111111; font-weight: 600;">${email}</p>
                </td>
              </tr>
              <tr><td style="height: 8px;"></td></tr>
              <tr>
                <td style="padding: 12px 16px; background: #f8f9fa; border-radius: 8px;">
                  <p style="margin: 0; font-size: 11px; color: #9ca3af; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Pesan</p>
                  <p style="margin: 4px 0 0; font-size: 15px; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </td>
              </tr>
            </table>
          </div>
          <div style="padding: 20px 32px; background: #f8f9fa; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">Pesan ini dikirim melalui form website BGS Sidoarjo · Balas langsung ke email pengirim</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Gagal mengirim email.' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Email berhasil dikirim!' }, { status: 200 })
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json({ error: 'Terjadi kesalahan server.' }, { status: 500 })
  }
}

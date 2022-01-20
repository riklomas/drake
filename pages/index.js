import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div id="app">
        <div id="cover">
          <textarea placeholder="If youre reading this start typing" autoFocus="autofocus" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" maxLength="60">

          </textarea>

          <div className="prayer">
            <Image src="/one-like-one-prayer.jpg" alt="Prayer hands" height="80" width="60" />
          </div>
          <div className="exp">
            <Image src="/fuck.jpg" alt="Parent Warning" className="fuck" width="120" height="80" />
          </div>
        </div>
      </div>

      <div className="by">
        <a href="http://www.twitter.com/riklomas">@riklomas</a> + <a href="http://www.twitter.com/whybray">@whybray</a>
      </div>

      <Head>
        <title>If you&rsquo;re typing this, it&rsquo;s too late</title>
        <meta name="viewport" content="width=900"></meta>
      </Head>
    </>
  )
}

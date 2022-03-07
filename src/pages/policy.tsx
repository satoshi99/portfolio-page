import {
  Box,
  Divider,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { ChakraLink } from '../components/ChakraLink'

const Policy: NextPage = () => {
  const headingFontSize = '2xl'
  const linkColor = useColorModeValue('blue.600', 'blue.200')

  return (
    <Layout title="Privacy Policy">
      <Stack p={{ base: '10', md: '24' }} pt="24">
        <Heading textAlign="center" fontSize="4xl" mb="10">
          Privacy Policy
        </Heading>
        <Stack py="5">
          <Text>制定日：2021年10月31日</Text>
          <Text>最終改定日：2021年10月31日</Text>
        </Stack>

        <Text>
          Satoshi Tech
          Portfolio（以下「当サイト」）では当サイトの提供するコンテンツにおけるユーザの個人情報を含む利用者情報の取扱いについて、以下の通りプライバシーポリシーを定めます。
        </Text>

        <Stack spacing="5" pt="5">
          <Box>
            <Heading fontSize={headingFontSize}>運営者</Heading>
            <Text>運営者：Satoshi Yoshida / 吉田　悟志</Text>
            <Text>連絡先：sayoshida22#gmail.com</Text>
          </Box>

          <Box>
            <Heading fontSize={headingFontSize}>
              収集する利用者情報及び収集方法
            </Heading>
            <Text>
              　当サイトでは、お問い合わせページに設置している入力フォームでのご連絡の際、ユーザーの氏名及びメールアドレスを収集いたします。
            </Text>
            <Text>
              　収集した情報は、お問い合わせに対する回答や必要な情報を電子メール等でご連絡する場合にのみ利用させていただきます。
            </Text>
          </Box>

          <Box>
            <Heading fontSize={headingFontSize}>広告について</Heading>
            <Text>
              　当サイトでは、第三者配信の広告サービス「Google Adsense
              グーグルアドセンス」を利用しています。
            </Text>
            <Text>
              　このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報
              『Cookie』(氏名、住所、メール アドレス、電話番号は含まれません)
              を使用することがあります。
              Cookieを無効にする設定およびGoogleアドセンスに関する詳細は
              <ChakraLink
                isExternal
                href="https://policies.google.com/technologies/ads?hl=ja"
                color={linkColor}
                _hover={{ opacity: '0.5' }}
              >
                「広告 – ポリシーと規約 – Google」
              </ChakraLink>
              をご覧ください。
            </Text>
          </Box>

          <Box>
            <Heading fontSize={headingFontSize}>
              アクセス解析ツールについて
            </Heading>
            <Text>
              　当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
            </Text>
            <Text>
              　このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
              このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
              また、この機能はCookieを無効にすることで収集を拒否できますので、お使いのブラウザの設定をご確認ください。
              この規約の詳細は
              <ChakraLink
                isExternal
                href="https://policies.google.com/technologies/partner-sites"
                color={linkColor}
                _hover={{ opacity: '0.5' }}
              >
                「Google
                のサービスを使用するサイトやアプリから収集した情報のGoogleによる使用」
              </ChakraLink>
              をご覧ください。
            </Text>
          </Box>

          <Box>
            <Heading fontSize={headingFontSize}>著作権について</Heading>
            <Text>
              　当サイトで掲載しているコンテンツ（画像や動画、文章など）の著作権は原則当サイトに帰属しており、著作物を無断転載することを禁止します。
              また当サイトは著作権や肖像権の侵害を目的としたものではありません。
            </Text>
            <Text>
              　当サイトの著作物を利用したい場合、または当サイトのコンテンツにおける著作権や肖像権に関して問題がある場合は、お問い合わせフォームよりご連絡ください。
            </Text>
          </Box>

          <Box>
            <Heading fontSize={headingFontSize}>リンクについて</Heading>
            <Text>
              　当サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。
              ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。
            </Text>
          </Box>

          <Box>
            <Heading fontSize={headingFontSize}>免責事項</Heading>
            <Text>
              　当サイトはアフィリエイトプログラムを使用し商品を紹介しており、直接の販売は行っておりません。商品に関するお問い合わせは販売店様へ直接ご連絡ください。
              当サイトからリンクやバナー等で移動したサイトで提供される情報、サービス等については一切の責任を負いません。
              また、リンク先サイトの正確性や合法性、その内容について一切保証するものではありません。
            </Text>
            <Text>
              　当サイトでは、可能な限り正確な情報を提供するよう努めておりますが、個人的見解を述べる場合もあり、必ずしも正確性や安全性等を保証するものではありません。
              万が一、当サイトをご利用することで発生したトラブルに関しては一切の責任を負いかねます。あらかじめご了承ください。
              当サイト内の誤り等、気になる点があれば、お問い合わせフォーム等でいつでもご連絡ください。
            </Text>
            <Text>
              　また、本免責事項、および当サイトに掲載しているすべての記事は、予告なしに変更・削除されることがあります。
              予めご了承下さい。
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Layout>
  )
}

export default Policy

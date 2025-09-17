import { Text, Page } from "@vercel/examples-ui";
import { Chat } from "../components/Chat";

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6 pl-[70px]">
        <Text variant="h1">OpenAI GPT-3</Text>
      </section>

      <section className="flex flex-col gap-3 pl-[40px]">
        <h3 className="text-2xl pl-[40px] ">Noah-GPT-bot</h3>
        <div className="lg:w-2/3  mt-[100px]">
          <Chat />
        </div>
      </section>
    </Page>
  );
}

export default Home;

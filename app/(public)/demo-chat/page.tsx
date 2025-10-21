import MinimalChatBox from "@/components/ui/minimal-chat-box"

export default function DemoChat() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Minimal Chat Box Demo</h1>
        <p className="text-muted-foreground">
          Click the chat icon in the bottom-right corner to start chatting
        </p>
      </div>
      <MinimalChatBox />
    </div>
  )
}

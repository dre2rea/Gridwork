interface HeaderProps {
  title: string
  bio: string
}

export function Header({ title, bio }: HeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-2xl md:text-3xl font-semibold mb-2">{title}</h1>
      <p className="text-muted max-w-xl">{bio}</p>
    </header>
  )
}


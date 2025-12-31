interface AuthorProfileProps {
  author: {
    name: string
    bio: string
    avatarUrl: string
  }
}

export default function AuthorProfile({ author }: AuthorProfileProps) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
      <img
        src={author.avatarUrl}
        alt={author.name}
        className="h-16 w-16 rounded-full object-cover"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
          {author.name}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          {author.bio}
        </p>
      </div>
    </div>
  )
}

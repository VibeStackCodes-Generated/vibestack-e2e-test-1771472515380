import { createFileRoute } from '@tanstack/react-router'
import { useMutation, useQuery } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  const ping = useMutation({ mutationFn: async () => supabase.auth.getSession() })
  useQuery({ queryKey: ['about', 'warm'], queryFn: async () => ({ ok: true }) })

  return (
    <div className="p-6 gap-6">
      <Card className="rounded-[0.5rem] border border-border shadow-sm transition-all duration-200 hover:scale-[1.02]">
        <CardHeader>
          <CardTitle className="text-3xl font-[family-name:var(--font-display)]">About PantryPages</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>PantryPages is a public, login-free recipe browser built for quick discovery. Search and filter recipes by ingredients, tags, or keywords, then follow clear step-by-step instructions from prep to plating. Whether you’re planning a weeknight dinner or using up what’s in the pantry, PantryPages helps you get cooking faster.</p>
          <button className="underline transition-all duration-200" onClick={() => ping.mutate()}>Check session</button>
        </CardContent>
      </Card>
    </div>
  )
}

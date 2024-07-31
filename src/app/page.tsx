import SearchPokemonForm from '@/components/SearchPokemonForm'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <div className='flex items-center justify-center min-h-screen '>
        <div className='w-full'>
          <h1 className='text-2xl font-bold mb-6 text-center'>PoC Server Actions</h1>

          <SearchPokemonForm />
        </div>
      </div>
    </main>
  )
}

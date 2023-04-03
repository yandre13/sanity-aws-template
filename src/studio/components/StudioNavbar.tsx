import Link from 'next/link'

type Props = {
  renderDefault: (props: any) => React.ReactNode
}
export default function StudioNavbar(props: Props) {
  return (
    <>
      <div className="navbar">
        <div className="flex-1">
          <Link
            href="/"
            className="btn-ghost btn text-base normal-case hover:bg-transparent"
          >
            Go to Website
          </Link>
        </div>
        <div className="hidden flex-none md:block">
          <div className="rounded-2xl border-2 border-solid border-[#09f] bg-transparent px-4 py-3 text-current shadow-lg">
            <span>New software update available.</span>
          </div>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </>
  )
}

type Props = {
  renderDefault: (props: any) => React.ReactNode
}
export default function Logo(props: Props) {
  return (
    <>
      <div className="flex items-center py-2 pl-3">
        <div className="mask mask-hexagon w-14">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        <>{props.renderDefault(props)}</>
      </div>
    </>
  )
}

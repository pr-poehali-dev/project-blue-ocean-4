import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import LectureSections from "@/components/LectureSections"

const Index = () => {
  return (
    <ShaderBackground>
      <Header />
      <div className="min-h-screen flex flex-col justify-between pt-20">
        <div className="flex-1 relative">
          <HeroContent />
          <PulsingCircle />
        </div>
        <LectureSections />
      </div>
    </ShaderBackground>
  )
}

export default Index
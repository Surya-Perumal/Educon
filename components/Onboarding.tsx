import React, { useState } from 'react';
import { User, Briefcase, GraduationCap, ArrowRight, Check, BookOpen, Globe, Trophy, ArrowLeft } from 'lucide-react';
import Button from './Button';

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: '',
    goals: [] as string[],
    educationLevel: '',
    dreamDestination: ''
  });

  const handleRoleSelect = (role: string) => {
    setFormData({ ...formData, role });
    setStep(2);
  };

  const handleGoalToggle = (goal: string) => {
    if (formData.goals.includes(goal)) {
      setFormData({ ...formData, goals: formData.goals.filter(g => g !== goal) });
    } else {
      setFormData({ ...formData, goals: [...formData.goals, goal] });
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Welcome to EduVantage!</h2>
        <p className="text-gray-600">Let's customize your experience. First, tell us who you are.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { id: 'student', title: 'Student', icon: <User size={32} />, desc: 'Looking for universities & career guidance.' },
          { id: 'parent', title: 'Parent', icon: <Briefcase size={32} />, desc: 'Exploring options for my child.' },
          { id: 'institution', title: 'University/College', icon: <GraduationCap size={32} />, desc: 'Looking for partnership & student recruitment.' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => handleRoleSelect(item.id)}
            className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 hover:-translate-y-1 ${
              formData.role === item.id 
                ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                : 'border-gray-100 bg-white hover:border-primary/50 hover:shadow-lg'
            }`}
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
              formData.role === item.id ? 'bg-primary text-white' : 'bg-indigo-50 text-primary'
            }`}>
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6 animate-fadeIn max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">What are your goals?</h2>
        <p className="text-gray-600">Select all that apply so we can tailor your feed.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { id: 'admissions', label: 'University Admissions', icon: <GraduationCap /> },
          { id: 'abroad', label: 'Study Abroad', icon: <Globe /> },
          { id: 'scholarships', label: 'Scholarships', icon: <Trophy /> },
          { id: 'testprep', label: 'Test Prep (SAT/GRE)', icon: <BookOpen /> },
          { id: 'career', label: 'Career Counseling', icon: <Briefcase /> },
          { id: 'visa', label: 'Visa Assistance', icon: <User /> },
        ].map((goal) => (
          <button
            key={goal.id}
            onClick={() => handleGoalToggle(goal.id)}
            className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
              formData.goals.includes(goal.id)
                ? 'border-primary bg-primary text-white shadow-lg shadow-primary/30'
                : 'border-gray-200 bg-white text-gray-700 hover:border-primary hover:bg-indigo-50'
            }`}
          >
            <div className={formData.goals.includes(goal.id) ? 'text-white' : 'text-primary'}>
              {goal.icon}
            </div>
            <span className="font-semibold">{goal.label}</span>
            {formData.goals.includes(goal.id) && <Check size={18} className="ml-auto" />}
          </button>
        ))}
      </div>

      <div className="flex justify-between pt-8">
        <Button variant="white" onClick={() => setStep(1)} className="!px-6">
          Back
        </Button>
        <Button 
          onClick={() => setStep(3)} 
          disabled={formData.goals.length === 0}
          className="!px-8"
        >
          Next Step
        </Button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6 animate-fadeIn max-w-xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Almost there!</h2>
        <p className="text-gray-600">A few final details to personalize your dashboard.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Current Education Level</label>
          <select 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            value={formData.educationLevel}
            onChange={(e) => setFormData({...formData, educationLevel: e.target.value})}
          >
            <option value="">Select Level</option>
            <option value="high_school">High School</option>
            <option value="undergrad">Undergraduate</option>
            <option value="graduate">Graduate</option>
            <option value="working">Working Professional</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Dream Destination (Optional)</label>
          <input 
            type="text" 
            placeholder="e.g. USA, UK, Canada"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            value={formData.dreamDestination}
            onChange={(e) => setFormData({...formData, dreamDestination: e.target.value})}
          />
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <Button variant="white" onClick={() => setStep(2)} className="!px-6">
          Back
        </Button>
        <Button 
          onClick={() => setStep(4)}
          disabled={!formData.educationLevel}
          className="!px-8"
        >
          Complete Setup
        </Button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="text-center max-w-lg mx-auto animate-fadeIn py-12">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check size={48} className="text-green-600" />
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">You're All Set!</h2>
      <p className="text-xl text-gray-600 mb-8">
        We've personalized your dashboard based on your goals. Get ready to shape your future.
      </p>
      <Button onClick={onComplete} size="lg" className="w-full max-w-xs shadow-xl shadow-primary/20">
        Go to Dashboard <ArrowRight className="ml-2" />
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Progress Bar */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="flex justify-between mb-2">
           <span className="text-xs font-semibold text-primary uppercase tracking-wider">Step {step} of 4</span>
           <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{
             step === 1 ? 'Role' : step === 2 ? 'Goals' : step === 3 ? 'Details' : 'Finish'
           }</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
      </div>
    </div>
  );
};

export default Onboarding;
import { motion } from 'framer-motion';
import { Check, Crown, Zap, Award, Shield } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: 0,
      period: 'month',
      description: 'Perfect for trying out our platform',
      features: [
        'Basic workout plans',
        'Progress tracking',
        'Community access',
        'Email support',
        '3-day free trial of premium features'
      ],
      featured: false,
      buttonText: 'Get Started',
      buttonVariant: 'outline'
    },
    {
      name: 'Premium',
      price: 14.99,
      period: 'month',
      description: 'Best for dedicated fitness enthusiasts',
      features: [
        'All Starter features',
        'Unlimited workout plans',
        'Advanced analytics',
        'Meal planning',
        'Priority support',
        'Personalized coaching',
        'Exclusive content',
        'Cancel anytime'
      ],
      featured: true,
      buttonText: 'Start Free Trial',
      buttonVariant: 'primary',
      popular: true
    },
    {
      name: 'Annual',
      price: 9.99,
      period: 'month',
      billing: 'billed annually ($119.88)',
      description: 'Best value - Save 33%',
      features: [
        'All Premium features',
        '2 months free',
        'Yearly progress reports',
        'VIP support',
        'Free fitness assessment',
        'Exclusive webinars',
        'Cancel anytime'
      ],
      featured: false,
      buttonText: 'Choose Annual',
      buttonVariant: 'outline',
      save: 'Save $60'
    }
  ];

  const FeatureItem = ({ text }) => (
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
      <span className="text-gray-600">{text}</span>
    </li>
  );

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan for your fitness journey. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-lg ${
                plan.popular ? 'ring-2 ring-fitness-green transform md:-translate-y-2' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-fitness-green text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
                  MOST POPULAR
                </div>
              )}
              
              {plan.save && (
                <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
                  {plan.save}
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  {plan.popular && (
                    <Crown className="w-5 h-5 text-amber-400 ml-2" />
                  )}
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500">/{plan.period}</span>
                  {plan.billing && (
                    <p className="text-sm text-gray-500 mt-1">{plan.billing}</p>
                  )}
                </div>

                <p className="text-gray-600 mb-6">{plan.description}</p>

                <a
                  href="#"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-gradient-to-r from-fitness-green to-cyan-500 text-white hover:opacity-90'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </a>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    What's included:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <FeatureItem key={i} text={feature} />
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Not sure which plan is right for you?</h3>
              <p className="text-gray-600 mb-4">
                Try our 7-day free trial and get full access to all premium features. Cancel anytime.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Shield className="w-4 h-4 mr-2 text-green-500" />
                <span>No credit card required</span>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-right">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-gradient-to-r from-fitness-green to-cyan-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fitness-green"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start 7-Day Free Trial
              </a>
              <p className="text-sm text-gray-500 mt-2">No commitment, cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

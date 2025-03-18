import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useSubscription } from '@/contexts/SubscriptionContext';
import { useAuth } from '@/contexts/AuthContext';
import { createCheckoutSession } from '@/lib/stripe';
import { formatCurrency } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

export function PricingPlans() {
  const { pricingPlans, subscription, loading } = useSubscription();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubscribe = async (priceId: string) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to subscribe to a plan",
      });
      navigate('/login');
      return;
    }

    try {
      await createCheckoutSession(priceId);
    } catch (error) {
      console.error('Error creating checkout session:', error);
      toast({
        title: "Error",
        description: "Failed to create checkout session",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {pricingPlans.map((plan, index) => {
        const isCurrentPlan = subscription?.price_id === plan.price.id;
        
        return (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className={`flex flex-col h-full ${isCurrentPlan ? 'border-primary' : ''}`}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">
                    {formatCurrency(plan.price.unit_amount)}
                  </span>
                  {plan.price.type === 'recurring' && (
                    <span className="text-sm text-muted-foreground ml-1">
                      /{plan.price.interval}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                {isCurrentPlan ? (
                  <Button className="w-full" variant="outline" disabled>
                    Current Plan
                  </Button>
                ) : (
                  <Button 
                    className="w-full" 
                    onClick={() => handleSubscribe(plan.price.id)}
                  >
                    {subscription ? 'Change Plan' : 'Subscribe'}
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
